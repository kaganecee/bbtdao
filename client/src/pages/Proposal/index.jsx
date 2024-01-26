import { useState, useEffect } from 'react'
import Web3 from 'web3'
import Form from '../../components/Form'
import DAOContract from '../../DAO.json'
import { CONTRACT_ADDRESS } from '../../helpers/constants'
import { getAccount } from '../../helpers/utils'
import Header from '../../components/Header'
import SecondaryHeader from '../../components/SecondaryHeader'

const Proposal = ({logout}) => {
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
                .send({ from: accounts })
            console.log('succesfully created:',receipt)
        } catch (error) {
            console.error('Error creating proposal', error)
        }
    }
    return (
        <>
            <Header logout={logout}/>
            <SecondaryHeader project="Create Proposal"/>
            <div style={{height:'75vh'}} className='flex justify-center items-center w-full h-full'>
                <Form createProposal={createProposal} />
            </div>
        </>
    )
}
export default Proposal
