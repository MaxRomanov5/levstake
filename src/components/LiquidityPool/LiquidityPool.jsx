import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery, useTheme } from "@mui/material";

const LiquidityPool = () => {
    const theme= useTheme()
    const mob = useMediaQuery(theme.breakpoints.up('md'))
    return (
        
            <TableContainer sx={{overflow:'scroll'}}>
      <Table sx={{padding:'8px',overflow:'scroll'}}  aria-label="customized table">
        <TableHead sx={{backgroundColor:'#3A3B3C',color:'#CACBCB'}}>
          <TableRow >
            <TableCell sx={{padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Status</TableCell>
            <TableCell sx={{padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Volume</TableCell>
            <TableCell sx={{padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >MKT
            <br></br> Price</TableCell>
            <TableCell sx={{padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >LIQ Price</TableCell>
           <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
         
            <TableRow >
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} >
               name
              </TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">MKT</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">10.000</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">0,8988</TableCell>
              <TableCell sx={{padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',borderBottomColor:'#3A3B3C'}} align="left" ><span style={{marginRight:'8px'}}>$</span>BUY {
              mob && 'Stake now'
             }</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} >
               name
              </TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">MKT</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">10.000</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">0,8988</TableCell>
              <TableCell sx={{padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',borderBottomColor:'#3A3B3C'}} align="left" ><span style={{marginRight:'8px'}}>$</span>BUY {
              mob && 'Stake now'
             }</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} >
               name
              </TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">MKT</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">10.000</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">0,8988</TableCell>
              <TableCell sx={{padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',borderBottomColor:'#3A3B3C'}} align="left" ><span style={{marginRight:'8px'}}>$</span>BUY {
              mob && 'Stake now'
             }</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} >
               name
              </TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">MKT</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">10.000</TableCell>
              <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">0,8988</TableCell>
              <TableCell sx={{padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',borderBottomColor:'#3A3B3C'}} align="left" ><span style={{marginRight:'8px'}}>$</span>BUY {
              mob && 'Stake now'
             }</TableCell>
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
        
    );
}

export default LiquidityPool;
