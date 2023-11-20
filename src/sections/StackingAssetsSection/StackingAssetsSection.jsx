import { Typography } from "@mui/material";
import StakingAsset from "../../components/StakingAsset/StakingAsset";


const StackingAssetsSection = () => {
    return (
     <section style={{paddingBottom:'160px'}}>
                    <Typography sx={{marginBottom:'16px'}} color='primary.main' variant="h2">Leveraged staking assets</Typography> 
           <Typography sx={{marginBottom:'64px'}} variant="subtitle1" color='#CACBCB'>Some great description about how it works and what it does.</Typography>
<StakingAsset></StakingAsset>
     </section>
    );
}

export default StackingAssetsSection;
