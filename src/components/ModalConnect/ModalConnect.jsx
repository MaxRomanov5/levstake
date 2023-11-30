import { NavLink } from 'react-router-dom';
import styled from './ModalConnect.module.css'
import {Typography } from "@mui/material";


const ModalMenu = ({handleClick}) => {


    return (
      <div onClick={handleClick} className={styled.modalWrap}>
      <div className={styled.modal}>
<Typography>After installing MetaMask extension,please,refresh website</Typography>
<button onClick={()=>{location.reload();}}>Refresh</button>
      </div>
      </div>
    );
}

export default ModalMenu;