import React from 'react'
import bbtdao from "./../assets/images/bbtdao.jpg";

const Login = ({ connectionToWallet }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <img src={bbtdao} alt="Our Logo" className="mb-8 mx-auto rounded" />
        <div className='flex justify-center items-center flex-col gap-12 pt-8 '>
            
            <h1 className='text-xl'>You must Login with Metamask account.</h1>
            <button
                className="mr-2 px-36 py-2 bg-green-800 text-white rounded"
                onClick={connectionToWallet}
            >
                Connect Metamask
            </button>
        </div>
      </div>
    </div>
    )
}

export default Login
