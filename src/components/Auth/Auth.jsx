

import {Navigate} from "react-router-dom"
import PropTypes from 'prop-types';
import { useUser } from '../../Context/userContext.jsx'
const ProtectedRoute = ({children}) => {
  const { isLoggedIn} = useUser();

if(isLoggedIn){
  return children
}

        return <Navigate to="/levstake/connectWallet"  />
    
};
ProtectedRoute.propTypes = {

  children: PropTypes.array
};
export default ProtectedRoute;