/* eslint-disable */
import { useState } from "react";

const Form = ({ createProposal }) => {
  const [proposal, setProposal] = useState();
  const [tokenCount, setTokenCount] = useState(0);

  const handleSubmission = async () => {
    await createProposal(proposal)
    setProposal('')
  }

  return (
    <div className="proposal-form-container">
      <h1 className="form-title comfortaa">Create Proposal</h1>
      <p className="token-count comfortaa">Total Token: {tokenCount}</p>
      <label className="form-label comfortaa">
        Proposal Name:
        <input
          type="text"
          onChange={(e) => setProposal(e.target.value)}
          className="form-input"
          value={proposal}
        />
      </label>

      <label className="form-label comfortaa">
        Required Token:
        <input
          type="number"
          value={tokenCount}
          onChange={(e) => setTokenCount(parseInt(e.target.value, 10))}
          className="form-input"
        />
      </label>
      <button onClick={handleSubmission}>Create Proposal</button>
    </div>
  );
};

export default Form;
