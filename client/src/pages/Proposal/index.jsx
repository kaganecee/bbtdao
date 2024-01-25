import { useState, useEffect } from 'react'
import Web3 from 'web3'
import Form from '../../components/Form'
import DAOContract from '../../DAO.json'
import { CONTRACT_ADDRESS } from '../../helpers/constants'
import { getAccount } from '../../helpers/utils'

const Proposal = () => {
    const [web3, setWeb3] = useState(null)
    const [daoContract, setDAOContract] = useState(null)

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                try {
                    const web3Instance = new Web3(window.ethereum)
                    setWeb3(web3Instance)
                    const contractABI = DAOContract.abi
                    const contract = new web3Instance.eth.Contract(
                        contractABI,
                        CONTRACT_ADDRESS
                    )
                    setDAOContract(contract)
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

    const createProposal = async (description) => {
        try {
            const accounts = await getAccount(web3)
            const receipt = await daoContract.methods
                .createProposal(description)
                .send({ from: accounts[0] })
            const event = receipt.events.ProposalCreated
            if (event) {
                console.log('Proposal created successfully')
            } else {
                console.error(
                    'Error: Proposal creation event not found in the receipt'
                )
            }
        } catch (error) {
            console.error('Error creating proposal', error)
        }
    }
    return (
        <>
            <Form createProposal={createProposal} />
        </>
    )
}
export default Proposal
