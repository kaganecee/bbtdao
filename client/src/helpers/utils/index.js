export const detectProvider = () => {
    let provider;
    if( window.ethereum ) {
        provider = window.ethereum;
    } else if ( window.web3 ) {
        provider = window.web3.currentProvider
    } else {
        console.log('Non-ethereum browser detected. You should install metamask.')
    }
    return provider;
};

export const getAccount = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    console.log('fetched accounts:',accounts)
    return accounts[0];
}