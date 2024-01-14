// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {
    address public admin;
    uint public proposalCount;

    mapping(uint => Proposal) public proposals;
    mapping(address => uint) public balances;

    enum ProposalStatus { Pending, Approved, Rejected }

    struct Proposal {
        uint id;
        address creator;
        string description;
        uint votes;
        uint approvalVotes;
        ProposalStatus status;
        mapping(address => bool) voters;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    modifier onlyMembers() {
        require(balances[msg.sender] > 0, "Only members can call this function");
        _;
    }

    modifier onlyPendingProposal(uint _proposalId) {
        require(proposals[_proposalId].status == ProposalStatus.Pending, "Proposal must be pending");
        _;
    }

    modifier notVoted(uint _proposalId) {
        require(!proposals[_proposalId].voters[msg.sender], "You have already voted");
        _;
    }

    event ProposalCreated(uint indexed proposalId, address indexed creator, string description);
    event Voted(uint indexed proposalId, address indexed voter);
    event ProposalExecuted(uint indexed proposalId);

    constructor() {
        admin = msg.sender;
        mint(msg.sender, 100);  // Mint initial tokens for the admin
    }

    function mint(address _to, uint _amount) internal {
        balances[_to] += _amount;
    }

    function burn(address _from, uint _amount) internal {
        require(balances[_from] >= _amount, "Insufficient balance");
        balances[_from] -= _amount;
    }

    function createProposal(string memory _description) public onlyMembers {
        uint proposalId = proposalCount++;
        Proposal storage newProposal = proposals[proposalId];
        newProposal.id = proposalId;
        newProposal.creator = msg.sender;
        newProposal.description = _description;
        newProposal.votes = 0;
        newProposal.approvalVotes = 0;
        newProposal.status = ProposalStatus.Pending;

        emit ProposalCreated(proposalId, msg.sender, _description);
    }

    function vote(uint _proposalId) public onlyMembers onlyPendingProposal(_proposalId) notVoted(_proposalId) {
        proposals[_proposalId].voters[msg.sender] = true;
        proposals[_proposalId].votes++;

        if (proposals[_proposalId].votes >= (balances[msg.sender] / 2) + 1) {
            proposals[_proposalId].approvalVotes++;
            if (proposals[_proposalId].approvalVotes >= (balances[msg.sender] / 2) + 1) {
                proposals[_proposalId].status = ProposalStatus.Approved;
                emit ProposalExecuted(_proposalId);
            }
        }

        emit Voted(_proposalId, msg.sender);
    }

    function executeProposal(uint _proposalId) public onlyAdmin onlyPendingProposal(_proposalId) {
        require(proposals[_proposalId].approvalVotes >= (balances[msg.sender] / 2) + 1, "Not enough approval votes to execute");

        proposals[_proposalId].status = ProposalStatus.Approved;
        emit ProposalExecuted(_proposalId);
    }

    function rejectProposal(uint _proposalId) public onlyAdmin onlyPendingProposal(_proposalId) {
        proposals[_proposalId].status = ProposalStatus.Rejected;
    }
}
