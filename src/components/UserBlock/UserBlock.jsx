
import styled from './UserBlock.module.css'
import images from '../../assets/images';
import localStorage from '../../helpers/localStorage';
import { useState } from 'react';
import { useUser } from '../../Context/userContext';
const UserBlock = () => {
const {logOut} = useUser()
 const wallet = localStorage.load('wallet')
const [open, setOpen] = useState(false);
document.addEventListener('click',(e)=>{


    if(!document.querySelector('#userBlock')?.contains(e.target)){
setOpen(false)
    }
})
    return (
        <div id='userBlock' onClick={()=>{setOpen(!open)}} className={styled.block}>
            <img width='30px' height='28px' src={images.metaLogo} alt="metamask Logo" />
           
               <p className={styled.wallet}>{wallet.slice(0,4)+'...'+wallet.slice(wallet.length-3,wallet.length)}</p>
            
            <img src={images.tableArrowClose} style={{...(open&&{transform:"rotate(180deg)"})}} alt="arrow" />
           {open && <div onClick={()=>{logOut()}} className={styled.dropDown}><img width='15px'height='20px' src={images.exit} alt="exit" />
            <p>Logout</p>
            </div>}
        </div>
    );
}

export default UserBlock;
