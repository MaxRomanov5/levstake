import {ToggleButtonGroup,ToggleButton} from '@mui/material'

const BuySellSwitch = ({action,handleAction}) => {


   
    const backgroundColor = action==='buy' ? "#3AADA4" : '#F33E29'
 
    return (
        <ToggleButtonGroup
        sx={{display:'flex',justifyContent:'center',position:'relative',marginBottom:'8px',gap:'2px',width:'100%',padding:'4px',border:'1px solid #F7F7F71A',borderRadius:'8px',borderTopRightRadius:'8px',
        '& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected':{
          color:'white', backgroundColor:{backgroundColor}
        },'& .MuiButtonBase-root.MuiToggleButton-root':{
          border:'none'
        },
        }}
              value={action}
              exclusive
              onChange={handleAction}
              aria-label="action"
            >
              
              <ToggleButton sx={{color:'primary.main',fontFamily:'Montserrat',fontWeight:'500',fontSize:'12px',lineHeight:'12px',padding:'6px 12px',width:'100%',backgroundColor:'transparent',borderRadius:'8px','&&&&':{borderTopRightRadius:'8px',borderBottomRightRadius:'8px'}}} value="buy" aria-label="action">
             Buy
              </ToggleButton>
              <ToggleButton disabled sx={{color:'white',fontFamily:'Montserrat',fontWeight:'500',fontSize:'12px',lineHeight:'12px',padding:'6px 12px',width:'100%',backgroundColor:'transparent',borderRadius:'8px','&&&&':{borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px'}}} value="sell" aria-label="action">
              Sell
              </ToggleButton>
            </ToggleButtonGroup>
    );
}

export default BuySellSwitch;
