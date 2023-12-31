import { Typography } from "@mui/material";
import StakingAsset from "../../components/StakingAsset/StakingAsset";


const StackingAssetsSection = ({pools}) => {
    return (
     <section style={{paddingBottom:'160px'}}>
                    <Typography sx={{marginBottom:'16px',textAlign:'center'}} color='primary.main' variant="h2">Leveraged staking assets</Typography> 
           <Typography sx={{marginBottom:'64px',textAlign:'center'}} variant="subtitle1" color='#CACBCB'>Some great description about how it works and what it does.</Typography>
<StakingAsset pools={pools}></StakingAsset>
     </section>
    );
}

export default StackingAssetsSection;
