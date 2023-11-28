


import img from '../../assets/images.js'
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import styled from './logo.module.css'

const Logo = ({isLogin}) => {

    const theme = useTheme()
 const matches = useMediaQuery(theme.breakpoints.down('md'));
 const mob = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Stack justifyContent='left' alignItems='center' flexDirection='row' height={matches ? '32px':'40px'} flexWrap='wrap' >
            <img style={{height:'inherit',marginRight:matches?'12px': '14px'}} src={img.levlion} alt="levstake" />
           {isLogin && mob && (  <img className={styled.logo} style={{height:'80%'}} src={img.levtext} alt="levstake" />)} 
           </Stack>
    );
};





export default Logo;



