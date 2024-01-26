import { Link } from "react-router-dom";
import vote from "../../assets/images/vote.png";
import proposal from "../../assets/images/proposal.png";
import Card from "../../components/Card";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header/>
      <div style={{height:'90vh'}} className="flex flex-col items-center justify-center p-24 gap-8">
        <h1 className="text-3xl text-center leading-12 comfortaa w-8/12 tracking-widest">Remove limitations and centralization in traditional management systems with <span className="underline" style={{color:"#ef7878"}}>BBTDAO</span>. Dynamism is here.</h1>
        <div className="flex flex-row gap-4 space-x-8 pt-8">
          <Link to="/voting">
            <Card imageSrc={vote} title="Voting" />
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
