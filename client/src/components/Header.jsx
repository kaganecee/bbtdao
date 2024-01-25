import React from "react";
import { Link } from "react-router-dom";
import bbtdao from "./../assets/images/bbtdao.jpg";
import AccountBox from "./AccountBox";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4  text-white">
      <div>
        <img
          style={{ maxHeight: "52.6px", maxWidth: "256px" }}
          src={bbtdao}
          alt="Header Image"
        />
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="comfortaa">
          Home
        </Link>
        <Link to="/proposal" className="comfortaa">
          Proposals
        </Link>
        <Link to="/voting" className="comfortaa">
          Voting
        </Link>
        <AccountBox />
      </nav>
    </header>
  );
};

export default Header;
