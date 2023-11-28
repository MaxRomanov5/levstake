import { NavLink } from 'react-router-dom';
import styled from './ModalMenu.module.css'
import {Typography } from "@mui/material";


const ModalMenu = ({handleClick}) => {


    return (
      <div onClick={handleClick} className={styled.modalWrap}>
      <div className={styled.modal}>
<nav style={{display:'flex',flexDirection:'column',gap:'40px'}}>
<NavLink onClick={handleClick} to="/"><Typography variant='subtitle1' className={styled.current} sx={{fontSize:'16px',fontWeight:'500',color:'primary.main',lineHeight:'16px',padding:'8px'}}>Home<div className={styled.line}></div></Typography></NavLink>
          <NavLink onClick={handleClick} to="/contacts"><Typography variant='subtitle1' className={styled.current} sx={{fontSize:'16px',fontWeight:'500',color:'primary.main',lineHeight:'16px',padding:'8px'}}>Contacts<div className={styled.line}></div></Typography></NavLink>
          <NavLink onClick={handleClick} to="/feez"><Typography variant='subtitle1' className={styled.current} sx={{fontSize:'16px',fontWeight:'500',color:'primary.main',lineHeight:'16px',padding:'8px'}}>Fee structure<div className={styled.line}></div></Typography></NavLink>
          <NavLink onClick={handleClick} to="/faq"><Typography variant='subtitle1' className={styled.current} sx={{fontSize:'16px',fontWeight:'500',color:'primary.main',lineHeight:'16px',padding:'8px'}}>FAQ<div className={styled.line}></div></Typography></NavLink>
          
        </nav>
      </div>
      </div>
    );
}

export default ModalMenu;
