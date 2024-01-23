import { Link } from "react-router-dom";
import voting from "../../assets/images/voting.webp";
import proposal from "../../assets/images/proposal.png";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <div
        style={{ height: "35rem" }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-row space-x-8">
          <Link to="/voting">
            <Card imageSrc={voting} title="Voting" />
          </Link>
          <Link to="/proposal">
            <Card imageSrc={proposal} title="Proposal" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
