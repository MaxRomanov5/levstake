

import {Navigate} from "react-router-dom"
import PropTypes from 'prop-types';

const ProtectedRoute = ({children}) => {

 const a = true
if(a){
  return children
}

        return <Navigate to="/"  />
    
};
ProtectedRoute.propTypes = {

  children: PropTypes.array
};
export default ProtectedRoute;