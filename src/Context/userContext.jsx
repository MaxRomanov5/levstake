import { createContext, useContext, useState } from "react";
import localStorage from "../helpers/localStorage";

const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wallet, setWallet] = useState(null);

  const logIn = (userWallet) => {
    setIsLoggedIn(true);
    setWallet(userWallet)
    localStorage.save('wallet',userWallet)
  };

  const logOut = () => {
    setIsLoggedIn(false);
localStorage.save('TOKEN',"")

window.ethereum.request({
  method: "eth_requestAccounts",
  params: [{eth_accounts: {}}]
})
    setWallet(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, wallet, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};