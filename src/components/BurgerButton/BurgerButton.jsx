import images from "../../assets/images";


const BurgerButton = ({handleClick,isClicked}) => {



    return (
<button onClick={handleClick} style={{background:'transparent',border:0,padding:'8px',marginLeft:'16px'}}><img style={{background:'transparent',border:0}} src={isClicked ? images.navBarClose : images.navbar} alt="navbar" /></button>
    );
}

export default BurgerButton;
