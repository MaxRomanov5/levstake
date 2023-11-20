import Hero from "../../sections/Hero/Hero.jsx";
import Advantages from "../../sections/Advantages/Advantages.jsx";
import StackingTable from '../../sections/StackingTable/StackingTable.jsx';

import StackingAssetsSection from "../../sections/StackingAssetsSection/StackingAssetsSection.jsx";
import LiquidityPoolSection from "../../sections/LiquidityPoolSection/LiquidityPoolSection.jsx";
import Footer from "../../sections/Footer/Footer.jsx";
const Home = () => {
    return (
        <div>
         <Hero></Hero>
         <Advantages></Advantages>
         <StackingTable></StackingTable>
         <StackingAssetsSection></StackingAssetsSection>
         <LiquidityPoolSection></LiquidityPoolSection>
         <Footer></Footer>
        </div>
    );
}

export default Home;
