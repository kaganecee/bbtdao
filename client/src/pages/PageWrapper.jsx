import { useState, useMemo } from 'react'
import Web3 from 'web3'
import { detectProvider, getAccount } from './../helpers/utils';
import Login from './../components/Login';
import Header from '../components/Header';

const PageWrapper = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [ethBalance, setEthBalance] = useState("")
    const onConnect = async () => {
        try {
        const provider = detectProvider()
        if (provider) {
            await provider.request({method: 'eth_requestAccounts'});
            const web3 = new Web3(provider);
            const userAccount = getAccount(web3)
            // setEthBalance(ethBalance)
            setIsConnected(true)
            localStorage.setItem("isAuthenticated", true);
        }
        }
        catch(e) {
        console.log(e);
        }
    }
    const onDisconnect = () => {
        setIsConnected(false)
        localStorage.setItem("isAuthenticated", false);
    }
    const auth = localStorage.getItem("isAuthenticated");
    useMemo(() => {
      if(auth) {
        setIsConnected(true)
      }
    }, [auth])

    return (
    <>
      <Header/>
      {isConnected ? (
        children
      ) : (
        <Login connectionToWallet={onConnect} />
      )}
    </>
  );
};

export default PageWrapper;
