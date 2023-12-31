import {
  TableRow,
  TableCell,
  Button,
  useTheme,
  useMediaQuery,Tooltip
} from "@mui/material";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from "react";
import images from "../../assets/images";
import api from "../../API/levstake.js";
import localStorage from "../../helpers/localStorage";
import Web3 from "web3";
import { useUser } from "../../Context/userContext.jsx";
const TableRowBuy = ({ position, active }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const noDEsk = useMediaQuery(theme.breakpoints.down("lt"));
  const { isPending, startPending, endPending } = useUser();

  function statusMaker(status) {
    if (status === "waiting_for_funds") {
      return <span style={{ color: "#7A56F8" }}>waiting for funds</span>;
    }
    if (status === "open") {
      return <span style={{ color: "green" }}>open</span>;
    }
    if (status === "closed") {
      return <span style={{ color: "#F33E29" }}>closed</span>;
    }
  }
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
// position.position_open_date)
function dateMaker(dateOpen,creationDate){
  
if (dateOpen) {
  const newDate = new Date(Date.parse(dateOpen))
  const finalDate = `${monthNames[newDate.getMonth()]} ${newDate.getDate()}`
 return {newDate,finalDate}
} else if(creationDate) {
  const newDate = new Date(Date.parse(creationDate))
  const finalDate = `${monthNames[newDate.getMonth()]} ${newDate.getDate()}`
 return {newDate,finalDate}
}else{
  return null
}
  const newDate = new Date(Date.parse(position.position_open_date))

  // const a = date.getDay()
 const finalDate = `${monthNames[newDate.getMonth()]} ${newDate.getDate()}`
 return {}
}




  async function withdrawPosition(e) {
    try {
      console.log(e.target.id);
      e.target.insertAdjacentHTML('beforeend',`<span style=" width: 10px;
      height: 10px;
      margin-left: 5px;
      border: 1px solid #FFF;
      border-bottom-color: rgb(58, 173, 164);
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;"></span>`)
    startPending()
    const web3 = new Web3(window.ethereum);
    const wallet = localStorage.load("wallet");
    const normalWallet = web3.utils.toChecksumAddress(wallet);
    const dataContr = await api.signWithdraw(Number(e.target.id), normalWallet);
    

    const contractorAddres = position.blockchain.master_contract_address;

    const myContract = new web3.eth.Contract(
      position.blockchain.master_contract_abi,
      contractorAddres
    );

    const myFunc = myContract.methods.unstakeAssets(
      dataContr.signed_data.position_id,
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

    const result = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transaction],
    });
    e.target.innerHTML = 'Claimed!'
    e.target.disabled = true
    endPending()
    } catch (error) {
      endPending()

      e.target.innerHTML = 'CLAIM INTEREST'
      if(error.code === 4001){
        Notify.failure('You denied transaction')
      }
    
  }}

  return (
    <>
      <TableRow
        sx={{
          "& .MuiTableCell-root.MuiTableCell-body": {
            borderBottomColor: "#3A3B3C",
            paddingLeft: "8px",
          },
        }}
      >
        <TableCell
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            position: "relative",
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            padding:'0px 16px'
          }}
        >
 <img
              src={position.staking_pool.asset.picture}
              style={{ width: "24px", height: "24px" }}
              alt="coin"
            ></img>
        </TableCell>
     
        <TableCell
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            position: "relative",
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            padding:'7px'
          }} align="center"
        >
          {/* <img src={open ? images.tableArrowOpen:images.tableArrowClose} alt="arrow" style={{position:'absolute',top:'50%',left:'8px',transform:'translateY(-50%)'}} /> */}
          <div style={{  alignItems: "center" }}>
            {" "}
           
            {position.staking_pool.asset.name}
          </div>
        </TableCell>
        <TableCell  align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            padding:'7px'
          }}
        >
        <Tooltip sx={{display:'block'}} arrow title={`Leveraged amount : ${Number.isInteger(Number(position?.total_amount||'1')) ? Number(position?.total_amount||'1') :Number(position.total_amount).toFixed(1)} `}>  {Number.isInteger(Number(position.user_amount)) ? Number(position.user_amount) :Number(position.user_amount).toFixed(1)}</Tooltip>
        </TableCell>
        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            textWrap: "nowrap",
            padding:'7px'
          }}
        >
          {position.leverage}
        </TableCell>
        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            padding:'7px'
          }}
        >
          {Number.isInteger(Number(position.staking_pool.profit_rate)) ? Number(position.staking_pool.profit_rate) + "%" :Number(position.staking_pool.profit_rate).toFixed(1) + "%"}
        </TableCell>
        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: "white",
            textWrap: "nowrap",
            paddingTop: "9px",
            paddingBottom: "9px",
            padding:'7px'
          }}
        >
          {position.staking_pool.pool_duration}
        </TableCell>
        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            textWrap: "nowrap",
            padding:'7px'
          }}
        >
          On maturity
        </TableCell>
        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            padding:'7px'
          }}
        >
          {Number(position.liquidation_price).toFixed(3)}
        </TableCell>

        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: "#9A9B9B",
            textWrap: "nowrap",
            paddingTop: "9px",
            paddingBottom: "9px",
            padding:'7px'
          }}
        >
         <Tooltip sx={{display:'block'}} arrow title={`${dateMaker(position.position_open_date,position.position_creation_date)?.newDate || '-'}`}>{dateMaker(position.position_open_date,position.position_creation_date)?.finalDate || '-'}</Tooltip> 
        </TableCell>
        



        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: "#7A56F8",
            // display:'flex',
            // flexDirection:'column',
            textWrap: "nowrap",
            paddingTop: "0px",
            paddingBottom: "0px",
            padding:'7px'
          }}
        >
          <p>{position.status.split('_').join(' ')}</p> 
         <p style={{color:'#9A9B9B'}}>{position.position_close_date ? position.position_close_date : ''}</p>
        </TableCell>
        <TableCell align="center"
          sx={{
            ...(open && { borderBottom: "0px solid white" }),
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            padding:'7px'
          }}
        >
          <a
            style={{ display: "block", position: "relative" }}
            href={position.transaction_url}
          >
            {position.transaction_url ? (
              <img src={images.linkGreen}></img>
            ) : (
              <span
               
                className="loader"
              ></span>
            )}
          </a>
        </TableCell>
        
        {active === "active" && (
          <TableCell
            sx={{
              ...(open && { borderBottom: "0px solid white" }),
              fontWeight: "500",
              fontSize: "12px",
              fontFamily: "Montserrat",
              lineHeight: "16px",
              color: "#9A9B9B",
              padding: "0px 10px",
            }}
          >
            <Button
              disabled={position.status !== "closed" || isPending ? true : false}
              id={position.id}
              onClick={withdrawPosition}
              sx={{
                display: "flex",
                padding: "17px 8px",
                position:'relative',
                color:'#7A56F8',
                ...(position.status !== "closed"&&{"&&&&&": { color: "grey" }})
                ,
                ...(isPending&&{"&&&&&": { color: "grey" }}),
                fontFamily: "Montserrat",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "16px",
                letterSpacing: "0.04em",
                textWrap: "nowrap",
              }}
            >

              Claim interest
             
            </Button>
           
          </TableCell>
        )}
      </TableRow>

      {/* <TableRow
        sx={{
          "& .MuiTableCell-root.MuiTableCell-body": {
            borderBottomColor: "#3A3B3C",
            paddingLeft: "8px",
          },
        }}
        style={{
          paddingBottom: 0,
          paddingTop: 0,
          display: "none",
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 1s cubic-bezier(0, 1, 0, 1)",
          ...(open && {
            maxHeight: "99em",
            display: "table-row",
            transition: "max-height 1s ease-in-out",
          }),
        }}
      >
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            color: "white",
            fontFamily: "Montserrat",
            lineHeight: "16px",
          }}
        >
          Weekly
        </TableCell>
        <TableCell></TableCell>
        <TableCell
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: "#9A9B9B",
          }}
        >
          <span style={{ color: "#F33E29" }}>Liquidated</span>
          <br></br> 21/05/2023 14:53
        </TableCell>
        <TableCell
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            color: "#9A9B9B",
            fontFamily: "Montserrat",
            lineHeight: "16px",
          }}
        >
          21/05/2023 14:53
        </TableCell>
        <TableCell
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: "#9A9B9B",
          }}
          align="center"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            0 <img src={images.linkGreen} alt="link" />
          </div>
        </TableCell>
        <TableCell
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: "#9A9B9B",
          }}
          align="center"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            0 <img src={images.linkGreen} alt="link" />
          </div>
        </TableCell>
      </TableRow> */}
    </>
  );
};

export default TableRowBuy;
