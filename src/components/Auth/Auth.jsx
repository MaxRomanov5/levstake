

import {Navigate} from "react-router-dom"
import PropTypes from 'prop-types';
import { useUser } from '../../Context/userContext.jsx'
import localStorage from "../../helpers/localStorage.js";
const ProtectedRoute = ({children}) => {
  const { isLoggedIn} = useUser();

if(localStorage.load('TOKEN')){
  return children
}

        return <Navigate to="/levstake/connectWalletDesk"  />
    
};

export default ProtectedRoute;