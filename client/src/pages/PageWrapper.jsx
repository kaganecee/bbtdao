import { useState } from "react";
import Login from "./../components/Login";

const PageWrapper = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  return <>{isConnected ? children : <Login />}</>;
};

export default PageWrapper;
