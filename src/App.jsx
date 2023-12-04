import "./App.css";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header.jsx";
import localStorage from "./helpers/localStorage.js";
import { useUser } from './Context/userContext.jsx';

import { useEffect } from "react";
function App() {
 
  const { logIn,isLoggedIn } = useUser();

useEffect(() => {

  if(localStorage.load('TOKEN')){
logIn(localStorage.load('wallet'))
  }
 
}, []);
  return (<>
 
  <div className='bg'></div>
  {/* <div className="bgEff"></div> */}
  <div className="container">
<Header isLogin={isLoggedIn}/>
<Footer></Footer>
</div>

</>
  )
}

export default App;

