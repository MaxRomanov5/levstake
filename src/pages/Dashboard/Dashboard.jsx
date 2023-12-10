import BuyOrdersBlock from "../../components/BuyOrdersBlock/BuyOrdersBlock";
import ControlPools from "../../components/ControlPools/ControlPools";
// import SellOrdersBlock from "../../components/SellOrdersBlock/SellOrdersBlock";
import { useState, useEffect, useRef } from "react";
import api from "../../API/levstake.js";
// import {useUser} from '../../Context/userContext.jsx'
import localStorage from "../../helpers/localStorage.js";
const Dashboard = () => {
  const [activePositions, setActivePositions] = useState(null);
  const [historyPositions, setHistoryPositions] = useState(null);
  // const {isLoggedIn} = useUser()

  useEffect(() => {
    api.getPositions("active").then((data) => {
      setActivePositions(data);
    });
    const intPos1 = setInterval(() => {
      api.getPositions("active").then((data) => {
        setActivePositions(data);
      });

     
    }, 4000);
    return () => {
        return clearInterval(intPos1);
      };
  }, []);

  useEffect(() => {
    api.getPositions("history").then((data) => {
      setHistoryPositions(data);
    });
    const intPos2 = setInterval(() => {
      api.getPositions("history").then((data) => {
        setHistoryPositions(data);
      });

      
    }, 4000);
    return () => {
        return clearInterval(intPos2);
      };
  }, []);

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <ControlPools></ControlPools>

      {activePositions && historyPositions && (
        <BuyOrdersBlock
          activePositions={activePositions}
          historyPositions={historyPositions}
        ></BuyOrdersBlock>
      )}
      {/* <SellOrdersBlock></SellOrdersBlock> */}
    </div>
  );
};

export default Dashboard;
