/* eslint-disable */
import { useState } from 'react'

const Form = ({ createProposal }) => {
    const [proposal, setProposal] = useState()
    const [tokenCount, setTokenCount] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmission = async () => {
        await createProposal(proposal)
            .then(() => {
                setIsSubmitted(true)
                setProposal('')
                setTokenCount('')
            })
            .finally(() => {
                setIsSubmitted(false)
            })
    }

    return (
        <div className="proposal-form-container">
            <h1 className="form-title comfortaa">Create Proposal</h1>
            <label className="form-label comfortaa">
                Proposal Name
                <input
                    type="text"
                    onChange={(e) => setProposal(e.target.value)}
                    className="form-input"
                    value={proposal}
                />
            </label>

            <label className="form-label comfortaa">
                Required Token
                <input
                    type="number"
                    value={tokenCount}
                    onChange={(e) =>
                        setTokenCount(parseInt(e.target.value, 10))
                    }
                    className="form-input"
                />
            </label>

            <button
                onClick={handleSubmission}
                type="button"
                class="py-3 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
                Create Proposal
            </button>
            {isSubmitted && (
                <div className="mt-4">
                    <p className=" text-green-600 text-lg">
                        Submission success!
                    </p>
                    {/* You can add additional content or actions after submission */}
                </div>
            )}
        </div>
    )
}

export default Form
