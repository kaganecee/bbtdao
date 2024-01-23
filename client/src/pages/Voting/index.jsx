import React, { useState, useEffect } from "react";

const Voting = () => {
  let [proposals, setProposals] = useState([]);

  useEffect(() => {
    const sampleProposals = [
      { id: 1, title: "Proposal 1", tokenRequired: 5, isVisible: false },
      { id: 2, title: "Proposal 2", tokenRequired: 3, isVisible: false },
    ];
    setProposals(sampleProposals);
  }, []);

  const handleVoteClick = (id) => {
    setProposals((prevProposals) =>
      prevProposals.map((proposal) =>
        proposal.id === id
          ? { ...proposal, isVisible: !proposal.isVisible }
          : proposal
      )
    );
  };
  return (
    <>
      <h2 className="proposals-title comfortaa">Proposals</h2>
      <ul className="proposals-list">
        {proposals.map((proposal) => (
          <>
            <li key={proposal.id} className="proposal-item">
              <span className="proposal-info comfortaa">
                {proposal.title} - Required Token: {proposal.tokenRequired}
              </span>
              <button
                onClick={() => handleVoteClick(proposal.id)}
                className="vote-button comfortaa"
              >
                Vote
              </button>
            </li>
            {proposal.isVisible && (
              <li>
                <button>Yes</button>
                <button>No</button>
              </li>
            )}
          </>
        ))}
      </ul>
    </>
  );
};

export default Voting;
