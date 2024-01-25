import { Link } from "react-router-dom";
import vote from "../../assets/images/vote.png";
import proposal from "../../assets/images/proposal.png";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-24">
        <div className="flex flex-row space-x-8 pt-8">
          <Link to="/voting">
            <Card imageSrc={vote} title="Voting" />
          </Link>
          <Link to="/proposal">
            <Card imageSrc={proposal} title="Proposal" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
