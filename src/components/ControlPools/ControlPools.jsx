import BuySellBlock from "../../components/BuySellBlock/BuySellBlock";
import styled from "./Control.module.css";
import LiquidityPool from "../../components/LiquidityPool/LiquidityPool.jsx";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../../API/levstake.js";
const ControlPools = () => {
  const [pools, setPools] = useState(null);
  const [selectedPool, setSelectedPool] = useState({});

  useEffect(() => {
    api.getPools().then((data) =>{ setPools(data)
    setSelectedPool(data[0].id)});
  }, []);

  return (
    <div className={styled.mainBox}>
      <div className={styled.buySell}>
        {pools && pools.length !== 0  &&
          <BuySellBlock
            selectedPool={selectedPool}
            setSelectedPool={setSelectedPool}
            pools={pools}
          ></BuySellBlock> 
       } 
      </div>

      <div className={styled.pool}>
        <Typography
          variant="subtitle1"
          color="primary.main"
          sx={{ fontWeight: "600", marginTop: "24px", marginBottom: "8px" }}
        >
          Available pools
        </Typography>

        {pools && pools.length !== 0 ? (
          <LiquidityPool
            type="dashboard"
            setSelectedPool={setSelectedPool}
            pools={pools}
            selectedPool={selectedPool}
          ></LiquidityPool>
        ):<p style={{padding:'40px',textAlign:'center',color:'grey',fontSize:'15px',fontFamily:'Montserrat'}}>No available pools</p>}
      </div>
    </div>
  );
};

export default ControlPools;
