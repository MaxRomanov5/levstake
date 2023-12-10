function links(isLoggedIn,mob) {
    if (isLoggedIn) {
    return '/levstake/dashboard'
    } else {
      if(mob){
        return '/levstake/connectWallet'
      }else{
        return '/levstake/connectWalletDesk'
      }
  
    }
    
  }
  export default links