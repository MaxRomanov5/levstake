import BuySellSwitch from "../BuySellSwitch/BuySellSwitch";
import { useState, useEffect,useCallback } from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import debounce from "lodash/debounce";
import styled from "./BuySellBlock.module.css";
import Web3 from "web3";
import images from "../../assets/images";
import api from "../../API/levstake.js";
import localStorage from "../../helpers/localStorage";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Assetprice from "../AssetPrice/AssetPrice";
import {useUser} from '../../Context/userContext.jsx'

const BuySellBlock = ({ pools, selectedPool }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState("buy");
  const [instrument, setInstrument] = useState(pools[0]?.id);
  const [leverage, setLeverage] = useState(
    pools[0]?.pool_conditions.min_leverage
  );
  const [profit, setProfit] = useState('-');

  const [userAmount, setUserAmount] = useState("");
const {isPending,startPending,endPending} = useUser()
  const handleLeverage = (e) => {
    setLeverage(e.target.value);
    // changeProfit()
  };
  const handleInstrument = (e) => {
    setInstrument(e.target.value);
    setLeverage(
      pools.find((pool) => pool.id == e.target.value).pool_conditions
        .min_leverage
    );
    // changeProfit()
  };
  // const changeProfit = useCallback(
 
  // );


  const handleAction = (e, newAction) => {
    if (newAction !== null) {
      setAction(newAction);
    }
  };

  function handleUserAmount(e) {
    setUserAmount(e.target.value);
    // changeProfit()
  }

  useEffect(() => {
    if (typeof selectedPool === "number") {
      setInstrument(selectedPool);
      setLeverage(
        pools.find((pool) => pool.id == selectedPool).pool_conditions
          .min_leverage
      );
    }
  }, [selectedPool]);

  function changeInt(int) {
    if(Number.isInteger(Number(int))){
return Number(int)
    } else{
      Number(int).toFixed(1)
    }
  }

  const currentPoolData = pools.find((pool) => pool.id == instrument);

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    leverage: Yup.number()
      .positive(pools)
      .min(
        currentPoolData?.pool_conditions.min_leverage,
        "Enter bigger leverage!"
      )
      .max(
        currentPoolData?.pool_conditions.max_leverage,
        "Enter smaller leverage!"
      )
      .required("Required"),
    // amount: Yup.string().email('Invalid email').required('Required'),
  });

  function maxProfit(amount, lever) {
    if (!amount || !lever) {
      return "-";
    }
    return amount * lever;
  }

  async function submitF(e) {
    e.preventDefault();
    const buyBtn = document.querySelector("#buyBtn");
    
    startPending()
    setIsLoading(true)
    try {
      const web3 = new Web3(window.ethereum);
      const wallet = localStorage.load("wallet");
      const normalWallet = web3.utils.toChecksumAddress(wallet);
// console.log(currentPoolData.id);
// console.log(Number(userAmount));
// console.log(Number(leverage));
// console.log(normalWallet);
      const dataContr = await api.signDeposit(
        currentPoolData.id,
        Number(userAmount),
        Number(leverage),
        normalWallet
      );

      const contractorAddres = currentPoolData.asset.blockchain.master_contract_address

      const myContract = new web3.eth.Contract(
        currentPoolData.asset.blockchain.master_contract_abi,
        contractorAddres
      );

      const myApprove = new web3.eth.Contract(
        currentPoolData.asset.abi,
        contractorAddres
      );

      const approve = myApprove.methods.approve(
        contractorAddres,
        Number(userAmount)*10**currentPoolData.asset.decimal
      );
      const transactionApr = {
        from: normalWallet,
        to: contractorAddres,
        data: approve.encodeABI(),
        // Initial value, to be set by the spending cap function
        gas: (150000).toString(),
      };
console.log('start approve');
      const resultapr = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionApr],
      });
console.log('end approve');
      const myFunc = myContract.methods.stakeAssets(dataContr.signed_data.position_id,
        dataContr.signed_data.amount,
        dataContr.signed_data.currency,
        dataContr.signed_data.max_block,
        dataContr.signed_data.nonce,
        dataContr.signed_data.action,
        dataContr.signature
      );

      const transaction = {
        from: normalWallet,
        to: contractorAddres,
        data: myFunc.encodeABI(),
        gas: (150000).toString(),
      };
      console.log('start trans');
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transaction],
      });
      console.log(result);
      fetch(`https://api.polygonscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=${result}&apikey=XHV9XRQJXWJITE659S9KFESQGYEPM8U2SF`)
.then((data)=>{
  return data.json()
}).then(data=>{
  console.log(data);
})
      endPending()
      setIsLoading(false)
    } catch (error) {
      endPending()
      setIsLoading(false)
    }
  }
  useEffect(() => {
    // console.log(userAmount,leverage,currentPoolData.id);
    // debounce(() => {
    
      if(userAmount && leverage ){
      api.getProfit(currentPoolData.id,userAmount,leverage).then(data=>{
        console.log(data.profit);
        setProfit(data.profit.toFixed(1))
      }

      )}
    // }, 800)
  }, [userAmount,leverage,currentPoolData]);
  return (
    <>
      <Formik
        initialValues={{
          leverage: "",
          amount: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
      >
        {({ errors, touched }) => (
          <Form onSubmit={submitF} className={styled.block}>
            <BuySellSwitch
              action={action}
              handleAction={handleAction}
            ></BuySellSwitch>
            <Box sx={{ display: "flex", gap: "12px" }}>
              <FormControl fullWidth>
                <Box
                  sx={{
                    fontSize: "12px",
                    color: "primary.main",
                    top: "3px",
                    // position:'absolute',
                    left: "-12px",
                    marginBottom:'10px',
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                  }}
                  htmlFor="Instrument"
                >
                  Selected pool
                </Box>

                <Select IconComponent={(props)=>(<img style={{right:'12px',top:'45%'}} className={props.className} src={images.arrowBuySell}></img>)} 
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    backgroundColor: "#161C2A",
                    fontWeight: "400",
                    borderRadius: "8px",
                    lineHeight: "25px",
                    padding: "8px 12px",
                    color: "primary.main",
                    "&::before": {
                      border: "0",
                    },
                    "&::after": {
                      border: "0",
                    },
                    "&:hover::after": {
                      borderBottom: "0",
                      color: "white",
                    },
                    "&:hover:not(.Mui-disabled, .Mui-error)::before": {
                      borderBottom: "0",
                      color: "white",
                    },
                    "& svg": {
                      fill: "white",
                    },
                    "& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard":
                      { display: "flex", alignItems: "center", gap: "8px" },
                  }}
                  id="Instrument"
                  variant="standard"
                  value={instrument}
                  label="Instrument"
                  onChange={handleInstrument}
                >
                  {pools.length !== 0 && pools.map((pool) => {
                    return (
                      <MenuItem key={pool.id} value={`${pool?.id}`}>
                        <img
                          width="16px"
                          height="16px"
                          src={pool?.asset.picture}
                        ></img>
                        {pool?.asset?.name}{" | "}
                        {pool?.pool_duration}{" | "}
                        {pool?.pool_conditions.min_leverage +
                          "x" +
                          " - " +
                          pool?.pool_conditions.max_leverage +
                          "x"}{" | "}
                        {changeInt(Number(pool?.profit_rate))}{'%  APY'}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {/* 
    <FormControl  fullWidth>
        <InputLabel sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Maturity">
  Maturity
</InputLabel>
      <Select sx={{fontFamily: 'Montserrat',
    fontSize: '16px',backgroundColor:'#161C2A',
    fontWeight: '400',borderRadius:'8px',
    lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
border:'0'
      },'&::after':{
          border:'0'
                  },
                  '&:hover::after':{
                      borderBottom:'0',
                      color:'white'
                  },
                  '&:hover:not(.Mui-disabled, .Mui-error)::before':{
                      borderBottom:'0',
                      color:'white'
                  },
                  '& svg':{
                      fill:'white'
                  },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
              }}
        id="Maturity"
        variant='standard'
        value={maturity}
        label="Maturity"
        onChange={handleMaturity}>
        <MenuItem value={'5'} >5 days</MenuItem>
        <MenuItem value={'10'} >10 days</MenuItem>
        <MenuItem value={'20'} >20 days</MenuItem>
      </Select>
    </FormControl> */}
            </Box>

            {/* <Box sx={{display:'flex',gap:'12px',marginTop:'12px',marginBottom:'12px'}}>
          <FormControl  fullWidth>
          <InputLabel sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Leverage X">
          Leverage X
  </InputLabel>
       <Select sx={{fontFamily: 'Montserrat',
     fontSize: '16px',backgroundColor:'#161C2A',
     fontWeight: '400',borderRadius:'8px',
     lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
border:'0'
       },'&::after':{
           border:'0'
                   },
                   '&:hover::after':{
                       borderBottom:'0',
                       color:'white'
                   },
                   '&:hover:not(.Mui-disabled, .Mui-error)::before':{
                       borderBottom:'0',
                       color:'white'
                   },
                   '& svg':{
                       fill:'white'
                   },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
               }}
         id="Leverage X"
         variant='standard'
         value={leverage}
         label="Maturity"
         onChange={handleLeverage}>
         <MenuItem value={'2'} >2</MenuItem>
         <MenuItem value={'3'} >3</MenuItem>
         <MenuItem value={'5'} >5</MenuItem>
       </Select>
     </FormControl> */}

            {/* {action==='buy' && <FormControl  fullWidth>
          <InputLabel sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Type">
    Type
  </InputLabel>
       <Select sx={{fontFamily: 'Montserrat',
     fontSize: '16px',backgroundColor:'#161C2A',
     fontWeight: '400',borderRadius:'8px',
     lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
border:'0'
       },'&::after':{
           border:'0'
                   },
                   '&:hover::after':{
                       borderBottom:'0',
                       color:'white'
                   },
                   '&:hover:not(.Mui-disabled, .Mui-error)::before':{
                       borderBottom:'0',
                       color:'white'
                   },
                   '& svg':{
                       fill:'white'
                   },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
               }}
         id="Type"
         variant='standard'
         value={type}
         label="Maturity"
         onChange={handleType}>
         <MenuItem value={'MKT'} >MKT</MenuItem>
         <MenuItem value={'MKT2'} >MKT2</MenuItem>
         <MenuItem value={'MKT3'} >MKT3</MenuItem>
       </Select>
     </FormControl>} */}
            {/* </Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "12px",
                marginBottom: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "white",
                  top: "6px",
                  left: "-12px",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
                htmlFor="leverage"
              >
                Leverage X
              </p>
              <Field
                id="lev"
                name="leverage"
                value={leverage}
                onInput={handleLeverage}
                required
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  backgroundColor: "#161C2A",
                  fontWeight: "400",
                  borderRadius: "8px",
                  width: "calc(100% - 10px)",
                  lineHeight: "25px",
                  padding: "12px 5px",
                  color: "white",
                }}
                min={currentPoolData?.pool_conditions?.min_leverage}
                max={currentPoolData?.pool_conditions?.max_leverage}
                placeholder="1"
                className={styled.input}
                type="range"
              />
              {touched.leverage && errors.leverage && (
                <div>{errors.leverage}</div>
              )}
            </Box>
            <Typography
              color="primary.main"
              variant="tableCellMain"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              Leverage{" "}
              <Typography sx={{ fontWeight: "700",fontFamily:"Montserrat" }}>
                {leverage ? leverage + "x" : '-'}
              </Typography>
            </Typography>
            <Typography
              color="primary.main"
              variant="tableCellMain"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              Interest yearly{" "}
              <Typography sx={{ fontWeight: "700",fontFamily:"Montserrat" }}>
                {currentPoolData?.profit_rate ? changeInt(currentPoolData?.profit_rate) + "%" : '-'}
              </Typography>
            </Typography>
            <Typography
              color="primary.main"
              variant="tableCellMain"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              Leveraged yearly interest{" "}
              <Typography sx={{ fontWeight: "700",fontFamily:"Montserrat" }}>
                {currentPoolData?.profit_rate ? (
                 changeInt( Number(currentPoolData?.profit_rate) * Number(leverage)
                )) + "%":'-'}
              </Typography>
            </Typography>
            <Typography
              color="primary.main"
              variant="tableCellMain"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              Profit share{" "}
              <Typography sx={{ fontWeight: "700",fontFamily:"Montserrat" }}>
                {currentPoolData?.commission ? Number(currentPoolData?.commission).toFixed(0) + "%":'-'}
              </Typography>
            </Typography>
           
            <Typography
              color="primary.main"
              variant="tableCellMain"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              
              <Typography sx={{ fontWeight: "700",fontFamily:"Montserrat" }}>
                {/* {currentPoolData?.settlement_commission ? Number(currentPoolData?.settlement_commission).toFixed(0)  + "%" : '-'} */}
              </Typography>
            </Typography>
           
            <Assetprice
              settlementCommission={Number(
                currentPoolData?.settlement_commission
              )}
              currentPoolData={currentPoolData}
              leverage={leverage}
            ></Assetprice>
             <Typography
              color="primary.main"
              variant="tableCellMain"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              Return
              <Typography sx={{ fontWeight: "700",fontFamily:"Montserrat" }}>
                {profit}
              </Typography>
            </Typography>
            <Box
              sx={{
                backgroundColor: "#161C2A",
                borderRadius: "8px",
                padding: "8px 8px 8px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={styled.wrapAmount}>
                <img
                  width="16px"
                  height="16px"
                  src={currentPoolData?.asset?.picture || images.ethereum}
                  alt="coin"
                />
                <input
                disabled={isPending? true : false}
                  value={userAmount}
                  onInput={handleUserAmount}
                  required
                  id="amounT"
                  placeholder="1.1234"
                  className={styled.input}
                  type="number"
                />
              </div>
              <button
                className={styled.button}
                id="buyBtn"
                type="submit"
                disabled={isPending? true : false}
                style={{
                  backgroundColor: action === "buy" ? "#3AADA4" : "#F33E29",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <img src={images.rocket} alt="rocket" />
                <Typography
                  variant="subtitle1"
                  sx={{position:'relative',
                    fontSize: "14px",
                    lineHeight: "16px",
                    marginLeft: "16px",
                    fontWeight: "500",
                  }}
                  color="primary"
                >
                  {action === "buy" ? "Stake" : "Unstake"}
                  
                </Typography>
                {isLoading?<span className={styled.loaderMain}></span>:''}
              </button>
              {/* <Button sx={{padding:"12px 16px",borderRadius:'8px',
    
    ...(action==='buy' && {backgroundColor:'#3AADA4'}),
    ...(action==='buy' && {backgroundColor:'#3AADA4'})
    }} ></Button> */}
            </Box>
          </Form>
        )}
      </Formik>
      {/* {isPending && (
        <div className={styled.mainLoader}>
          <span className={styled.loaderMain}></span>
        </div>
      )} */}
    </>
  );
};

export default BuySellBlock;
