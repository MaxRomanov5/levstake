import BuySellBlock from "../../components/BuySellBlock/BuySellBlock";
import styled from './Dashboard.module.css'
import LiquidityPool from '../../components/LiquidityPool/LiquidityPool.jsx'
import {Typography} from '@mui/material'
import BuyOrdersBlock from "../../components/BuyOrdersBlock/BuyOrdersBlock";
import SellOrdersBlock from "../../components/SellOrdersBlock/SellOrdersBlock";
const Dashboard = () => {
    return (
        <div>
            <div className={styled.mainBox}>
                <div className={styled.buySell}>
                <BuySellBlock ></BuySellBlock>
                </div>
          
            <div className={styled.pool}>
            <Typography variant="subtitle1" color='primary.main'  sx={{fontWeight:'600',marginTop:'24px',marginBottom:'8px'}}>Liquidity pool</Typography>

            <LiquidityPool  type='dashboard'></LiquidityPool>
            </div>

            </div>
         
                <BuyOrdersBlock></BuyOrdersBlock>
            <SellOrdersBlock></SellOrdersBlock>
        </div>
    );
}

export default Dashboard;
