import {useMediaQuery,Typography,Stack,ToggleButtonGroup,ToggleButton,TableContainer,Table,TableCell,TableRow,TableHead,TableBody} from '@mui/material'
import { useState } from 'react';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import { useTheme } from '@emotion/react';


const Feez = () => {
const [structure, setStructure] = useState('Exchange');
const theme = useTheme()
const tab = useMediaQuery(theme.breakpoints.up('lg'))

// ethereum
// .request({
//   method: 'eth_requestAccounts',
//   params: [],
// })
// .then((res) => console.log('request accounts', res))
// .catch((e) => console.log('request accounts ERR', e));
// const ethereum = MMSDK.getProvider(); 

// console.log(ethereum);


const  handleStructure =(e, newStr)=>{
  if (newStr !== null) {
    setStructure(newStr);
  }

}
    return (
        <div>
                <Typography sx={{marginBottom:'24px',marginTop:'78px',textAlign:'center',...(tab&&{fontSize:'64px',lineHeight:'70px'})}} color='primary.main' variant="h2">Fee structure</Typography> 
              <Typography sx={{marginBottom:'80px',textAlign:'center'}} color='primary.main' variant="subtitle1" >Some subtext</Typography> 
              <Typography variant='h2' color='primary.main' sx={{fontSize:'40px',lineHeight:'44px',textAlign:'center',marginBottom:'16px'}}>How our fees stack against others</Typography>

          <Typography variant='subtitle1' color='primary.main' sx={{marginBottom:'48px',textAlign:'center'}}>We offer market competitive fees to sustain responsible trading.</Typography>
<Stack sx={{marginBottom:'80px',...(tab&&{flexDirection:'row',gap:'40px',justifyContent:'center'})}}>
<Stack alignItems='center' sx={{marginBottom:'40px'}}>
<Typography variant='h2' color='success.main' sx={{marginBottom:'24px'}}>0.04%</Typography>
<Typography variant='subtitle1' color='primary.main' sx={{fontSize:'16px',marginBottom:'16px'}}>Market maker fee</Typography>
<Typography color='#CACBCB' variant='tableCellMain'>On high volumes over $1,000,000 USD</Typography>
</Stack>
<Stack alignItems='center' sx={{marginBottom:'40px'}}>
<Typography variant='h2' color='success.main' sx={{marginBottom:'24px'}}>0.04%</Typography>
<Typography variant='subtitle1' color='primary.main' sx={{fontSize:'16px',marginBottom:'16px'}}>Market maker fee</Typography>
<Typography color='#CACBCB' variant='tableCellMain'>On high volumes over $1,000,000 USD</Typography>
</Stack>
<Stack alignItems='center' sx={{marginBottom:'40px'}}>
<Typography variant='h2' color='success.main' sx={{marginBottom:'24px'}}>0.04%</Typography>
<Typography variant='subtitle1' color='primary.main' sx={{fontSize:'16px',marginBottom:'16px'}}>Market maker fee</Typography>
<Typography color='#CACBCB' variant='tableCellMain'>On high volumes over $1,000,000 USD</Typography>
</Stack>
<Stack alignItems='center' sx={{marginBottom:'40px'}}>
<Typography variant='h2' color='success.main' sx={{marginBottom:'24px'}}>0.04%</Typography>
<Typography variant='subtitle1' color='primary.main' sx={{fontSize:'16px',marginBottom:'16px'}}>Market maker fee</Typography>
<Typography color='#CACBCB' variant='tableCellMain'>On high volumes over $1,000,000 USD</Typography>
</Stack>
</Stack>
<Typography variant='h2' color='primary.main' sx={{fontSize:'40px',lineHeight:'44px',textAlign:'center',marginBottom:'16px',...(tab&&{fontSize:'64px',lineHeight:'70px'})}}>Fee structure</Typography>


          <Typography variant='subtitle1' color='primary.main' sx={{marginBottom:'48px',textAlign:'center'}}>We offer market competitive fees to sustain responsible trading.</Typography>




          <ToggleButtonGroup
sx={{display:'flex',justifyContent:'center',position:'relative',marginBottom:'56px',gap:'16px',
'& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected':{
  color:'white',backgroundColor:'transparent'
},'& .MuiButtonBase-root.MuiToggleButton-root':{
  border:'none'
},'& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected:after':{
  content: '""',
  display:'block',
  height:'4px',
  width:'100%',
  backgroundColor:'purple.main',
  position:'absolute',
  left:'0',
  bottom:'-8px'

}
}}
      value={structure}
      exclusive
      onChange={handleStructure}
      aria-label="text alignment"
    >
      <ToggleButton sx={{color:'primary.main',fontFamily:'Montserrat',fontWeight:'500',fontSize:'16px',lineHeight:'16px',padding:'8px'}} value="Exchange" aria-label="Exchange">
      Exchange
      </ToggleButton>
      <ToggleButton sx={{color:'primary.main',fontFamily:'Montserrat',fontWeight:'500',fontSize:'16px',lineHeight:'16px',padding:'8px'}} value="Payments" aria-label="Payments">
      Payments
      </ToggleButton>
      <ToggleButton sx={{color:'primary.main',fontFamily:'Montserrat',fontWeight:'500',fontSize:'16px',lineHeight:'16px',padding:'8px'}} value="Cards" aria-label="Cards">
      Cards
      </ToggleButton>
    </ToggleButtonGroup>




    <TableContainer sx={{overflow:'scroll',margin:'0 auto',padding:'24px',backgroundColor:'#FFFFFF1A',borderRadius:'8px',marginBottom:'80px',maxWidth:'600px'}}>
      <Table sx={{padding:'8px',overflow:'scroll'}}  aria-label="customized table">
        <TableHead sx={{color:'#CACBCB'}}>
          <TableRow >
            <TableCell sx={{padding:'8px 28px', color:'#FFFFFF',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '500',lineHeight: '18px',letterSpacing: '0.04em',borderBottom:'1px solid white'}} align="center" >Status</TableCell>
            <TableCell sx={{padding:'8px 28px', color:'#FFFFFF',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '500',lineHeight: '18px',letterSpacing: '0.04em',borderBottom:'1px solid white'}} align="center" >Volume</TableCell>
            <TableCell sx={{padding:'8px 28px', color:'#FFFFFF',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '500',lineHeight: '18px',letterSpacing: '0.04em',borderBottom:'1px solid white'}} align="center" >Volume</TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
         
            <TableRow >
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
               $0 - $100,000
              </TableCell>
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
               0.0200%
              </TableCell>
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
              0.0200%
              </TableCell>
              </TableRow>

              <TableRow >
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
               $0 - $100,000
              </TableCell>
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
               0.0200%
              </TableCell>
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
              0.0200%
              </TableCell>
              </TableRow>

              <TableRow >
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
               $0 - $100,000
              </TableCell>
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
               0.0200%
              </TableCell>
              <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'center',borderBottom:'none'}} >
              0.0200%
              </TableCell>
              </TableRow>
              </TableBody>
       </Table>
       </TableContainer>

       <Typography variant='h2' color='primary.main' sx={{fontSize:'40px',lineHeight:'44px',textAlign:'center',marginBottom:'56px'}}>Contacts</Typography>
       <FeedbackForm></FeedbackForm>
        </div>
    );
}

export default Feez;
