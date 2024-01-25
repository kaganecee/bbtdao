import React, { useState, useMemo } from 'react'
import Web3 from 'web3'
import { detectProvider, getAccount } from './../helpers/utils'
import Login from './../components/Login'

const PageWrapper = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false)
    const [ethBalance, setEthBalance] = useState('')
    const onConnect = async () => {
        try {
            const provider = detectProvider()
            if (provider) {
                await provider.request({ method: 'eth_requestAccounts' })
                const web3 = new Web3(provider)
                const userAccount = await getAccount(web3)
                const balance = await web3.eth.getBalance(userAccount)
                setEthBalance(ethBalance)
                setIsConnected(true)
                localStorage.setItem('isAuthenticated', true)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const onDisconnect = () => {
        setIsConnected(false)
        localStorage.setItem('isAuthenticated', false)
    }
    const auth = localStorage.getItem('isAuthenticated')
    useMemo(() => {
        if (auth && window.ethereum) {
            setIsConnected(true)
        }
    }, [auth, window.ethereum])

    return (
        <>{isConnected ? React.cloneElement(children, { logout: onDisconnect }) : <Login connectionToWallet={onConnect} />}</>
    )
}

export default PageWrapper
