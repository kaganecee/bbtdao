import React, { useState, useEffect } from "react";

const ProposalForm = () => {
  const [proposals, setProposals] = useState([]);
  /*   const [userName, setUserName] = useState(""); */
  const [tokenCount, setTokenCount] = useState(0);
  const [selectedProposal, setSelectedProposal] = useState("");

  useEffect(() => {
    const sampleProposals = [
      { id: 1, title: "Proposal 1", tokenRequired: 5 },
      { id: 2, title: "Proposal 2", tokenRequired: 3 },
    ];
    setProposals(sampleProposals);
  }, []);

  return (
    <div className="proposal-form-container">
      <h1 className="form-title comfortaa">Voting Form</h1>
      <p className="token-count comfortaa">Total Token: {tokenCount}</p>

      <label className="form-label comfortaa">
        Proposal Name:
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          className="form-input"
        />
      </label>

      <label className="form-label comfortaa">
        Required Token Number:
        <input
          type="number"
          value={tokenCount}
          onChange={(e) => setTokenCount(parseInt(e.target.value, 10))}
          className="form-input"
        />
      </label>

      <h2 className="proposals-title comfortaa">Suggestions</h2>
      <ul className="proposals-list">
        {proposals.map((proposal) => (
          <li key={proposal.id} className="proposal-item">
            <span className="proposal-info comfortaa">
              {proposal.title} - Required Token: {proposal.tokenRequired}
            </span>
            <button
              onClick={() => setSelectedProposal(proposal.id)}
              disabled={tokenCount < proposal.tokenRequired}
              className={`vote-button comfortaa ${
                tokenCount < proposal.tokenRequired && "disabled-button"
              }`}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>

      <button
        disabled={!selectedProposal}
        className={`submit-button comfortaa ${
          !selectedProposal && "disabled-button"
        }`}
      >
        Send My Vote
      </button>
    </div>
  );
};

export default ProposalForm;
