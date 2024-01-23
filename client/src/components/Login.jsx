import React from 'react';

const Login = ({ connectionToWallet }) => {
    return ( 
        <div>
            <button onClick={connectionToWallet}>Login Metamask</button>
        </div>
    )
}

export default Login;