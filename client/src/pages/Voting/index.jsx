/* eslint-disable */
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import DAOContract from '../../DAO.json'
import { CONTRACT_ADDRESS } from '../../helpers/constants'
import { getAccount } from '../../helpers/utils'

const Voting = () => {
    let [proposals, setProposals] = useState([])
    const web3 = new Web3(window.ethereum)
    const contractABI = DAOContract.abi
    const contract = new web3.eth.Contract(
              contractABI,
              CONTRACT_ADDRESS
          )


    useEffect(() => {
      const updateProposals = async () => {
        const proposalList = await fetchProposals(contract)
        setProposals(proposalList)
        }
        updateProposals()
    }, [])
    const handleVoteClick = (id) => {
        setProposals((prevProposals) =>
            prevProposals.map((proposal) =>
                proposal.id === id
                    ? { ...proposal, isVisible: !proposal.isVisible }
                    : proposal
            )
        )
    }

    const fetchProposals = async (daoContract) => {
        const proposalCount = await daoContract.methods.proposalCount().call()
        const _proposals = []

        for (let i = 0; i < proposalCount; i++) {
            const proposal = await daoContract.methods.proposals(i).call()
            _proposals.push(proposal)
        }
        return _proposals
    }
    const voteProposal = async (proposalId) => {
        const account = await getAccount(web3)
        console.log(account)
        try {
            await contract.methods.vote(proposalId).send({ from: account })
        } catch (error) {
            console.error('Error voting for proposal', error)
        }
    }
    return (
        <>
            <h2 className="proposals-title comfortaa">Proposals</h2>
            <ul className="proposals-list">
                {proposals.map((proposal) => (
                    <>
                        <li key={proposal.id} className="proposal-item">
                            <span className="proposal-info comfortaa">
                                {proposal.description} - Required Token:{' '}
                                {proposal.tokenRequired}
                            </span>
                            <button
                                onClick={() => handleVoteClick(proposal.id)}
                                className={`vote-button comfortaa`}
                            >
                                Vote
                            </button>
                        </li>
                        {proposal.isVisible && (
                            <li>
                                <button onClick={() => voteProposal(Number(proposal.creator))}>
                                    Yes
                                </button>
                                <button onClick={() => voteProposal('No')}>
                                    No
                                </button>
                            </li>
                        )}
                    </>
                ))}
            </ul>
        </>
    )
}

export default Voting
