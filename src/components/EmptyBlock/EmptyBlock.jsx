import BuySellSwitch from "../BuySellSwitch/BuySellSwitch";
import { useState, useEffect,useCallback } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

const BuySellBlock = ({ pools, selectedPool,setSelectedPool }) => {

  const [action, setAction] = useState("buy");
  


  const handleAction = (e, newAction) => {
    if (newAction !== null) {
      setAction(newAction);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          leverage: "",
          amount: "",
        }}
        
      >
        {({ errors, touched }) => (
          <Form onSubmit={submitF} className={styled.block}>
            <BuySellSwitch
              action={action}
              handleAction={handleAction}
            ></BuySellSwitch>
           
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
          
                    return (
                      <MenuItem key={pool.id} value={pool?.id}>
                        -
                      </MenuItem>
               
                  
                </Select>
              </FormControl>

             
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
              <Typography sx={{ fontWeight: "700",fontSize:'12px',fontFamily:"Montserrat" }}>
              -
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
              <Typography sx={{ fontWeight: "700",fontSize:'12px',fontFamily:"Montserrat" }}>
               -
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
              <Typography sx={{ fontWeight: "700",fontSize:'12px',fontFamily:"Montserrat" }}>
               -
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
              <Typography sx={{ fontWeight: "700",fontSize:'12px',fontFamily:"Montserrat" }}>
              -
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
              
              <Typography sx={{ fontWeight: "700",fontSize:'12px',fontFamily:"Montserrat" }}>
     
              </Typography>
            </Typography>
           
            <Assetprice
            
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
              <Typography sx={{ fontWeight: "700",fontSize:'12px',fontFamily:"Montserrat" }}>

               -
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