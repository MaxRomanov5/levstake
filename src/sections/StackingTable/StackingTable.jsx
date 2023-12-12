import { Stack, Typography } from "@mui/material";
import StackingCard from "../../components/StackingCard/StackingCard";
import styled from './StackingTable.module.css'
import { useState,useEffect } from "react";
import api from '../../API/levstake.js'
const StackingTable = ({pools}) => {


    return (
        <section className={styled.sec}>
           <Typography sx={{marginBottom:'16px',textAlign:'center'}} color='primary.main' variant="h2">Staking table</Typography> 
           <Typography sx={{marginBottom:'56px',textAlign:'center'}} variant="subtitle1" color='#CACBCB'>Some great description about how it works and what it does.</Typography>
           <Stack gap='24px' flexWrap='wrap' flexDirection='row' justifyContent='center'>
               {pools && pools.map((pool)=>{
                   return <StackingCard pool={pool}></StackingCard>
               })}

           </Stack>
        </section>
    );
}

export default StackingTable;
