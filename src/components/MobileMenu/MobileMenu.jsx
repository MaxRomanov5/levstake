import { Stack } from "@mui/material";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useState } from "react";
import BuySellBtn from "../BuySellBtn/BuySellBtn";
import ModalMenu from "../ModalMenu/ModalMenu";

const MobileMenu = () => {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked)
    }
    return (
     <Stack flexDirection='row'  justifyContent='right'>
         <BuySellBtn text={'Buy/Sell'}></BuySellBtn>
            <BurgerButton isClicked={isClicked} handleClick={handleClick}></BurgerButton>
            {isClicked && <ModalMenu handleClick={handleClick}></ModalMenu>}
            </Stack>
       
    );
}

export default MobileMenu;
