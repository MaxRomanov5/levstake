import { Typography } from "@mui/material";
import LiquidityPool from "../../components/LiquidityPool/LiquidityPool.jsx";


const LiquidityPoolSection = () => {
    return (
        <div style={{paddingBottom:'72px'}}>
             <Typography sx={{marginBottom:'16px'}} color='primary.main' variant="h2">Asset liquidity pool</Typography> 
           <Typography sx={{marginBottom:'64px'}} variant="subtitle1" color='#CACBCB'>Some great description about how it works and what it does.</Typography>
            <LiquidityPool type='home'></LiquidityPool>
            
        </div>
    );
}

export default LiquidityPoolSection;
