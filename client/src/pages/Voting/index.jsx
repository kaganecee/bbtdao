/* eslint-disable */
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import daoContract from '../../DAO.json'
import { CONTRACT_ADDRESS } from '../../helpers/constants'
import { getAccount } from '../../helpers/utils'
import Header from '../../components/Header'

const Voting = ({ logout }) => {
    const [web3, setWeb3] = useState(null)
    let [proposals, setProposals] = useState([])
    const [contract, setContract] = useState([])
    const [account, setAccount] = useState('')
    useEffect(() => {
        const updateProposals = async (contract) => {
            const proposalList = await fetchProposals(contract)
            setProposals(proposalList)
        }
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    const web3Instance = new Web3(window.ethereum)
                    setWeb3(web3Instance)
                    const contractABI = daoContract.abi
                    const contractInstance = new web3Instance.eth.Contract(
                        contractABI,
                        CONTRACT_ADDRESS
                    )
                    setContract(contractInstance)
                    updateProposals(contractInstance)
                    const accountInstance = await getAccount(web3Instance)
                    setAccount(accountInstance)
                } catch (error) {
                    console.error('Error initializing web3', error)
                }
            } else {
                console.error(
                    'Please install MetaMask or another Ethereum wallet extension'
                )
            }
        }
        initWeb3()
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

    const fetchProposals = async (contract) => {
        try {
            const proposalCount = await contract.methods?.proposalCount().call()
            const _proposals = []

            for (let i = 0; i < proposalCount; i++) {
                const proposal = await contract.methods?.proposals(i).call()
                _proposals.push(proposal)
            }

            return _proposals
        } catch (error) {
            console.error('Error fetching proposals:', error)
            throw error // Re-throw the error for further handling
        }
    }

    const voteProposal = async (proposalId) => {
        try {
            await contract.methods?.vote(proposalId).send({ from: account })
        } catch (error) {
            console.error('Error voting for proposal', error)
        }
    }
    return (
        <>
            <Header logout={logout} />
            <h2 className="p-8 proposals-title comfortaa tracking-wider">
                Proposals
            </h2>
            <ul className="proposals-list flex justify-center flex-wrap items-center">
                {proposals.map((proposal) => (
                    <li
                        key={proposal.id}
                        className="proposal-item m-12 p-6 border rounded-lg shadow-md transition duration-300 hover:shadow-md relative"
                    >
                        <div className="proposal-header comfortaa text-white p-4 rounded-t-lg absolute top-0 left-0 right-0">
                            {proposal.description}
                        </div>
                        <div className="flex flex-col mt-6 p-6">
                            <span className="proposal-info font-extrabold comfortaa">
                                Required Token: {proposal.tokenRequired}
                            </span>
                            <button
                                onClick={() => handleVoteClick(proposal.id)}
                                className="vote-button font-extrabold comfortaa mt-8"
                            >
                                Vote
                            </button>
                            {proposal.isVisible && (
                                <div className="flex mt-4 space-x-6">
                                    <button
                                        onClick={() =>
                                            voteProposal(
                                                Number(proposal.creator)
                                            )
                                        }
                                        className="mr-2 px-4 py-2 bg-green-800 text-white rounded"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => voteProposal('No')}
                                        className="px-4 py-2 bg-red-600 text-white rounded"
                                    >
                                        No
                                    </button>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Voting
