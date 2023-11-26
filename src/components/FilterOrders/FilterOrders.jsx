import {Button,Menu,MenuItem,Paper,ListItem,Chip} from '@mui/material'
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import images from '../../assets/images';

const FilterOrders = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [chipData, setChipData] = useState([]);

    const dataBtn ={ Active:2,
        Matured:3,
        Liquidated:4
    }
    const colorBtn={ Active:'#7A56F8',
        Matured:'#3AADA4',
        Liquidated:'#C23221'}


    const handleClick = (event) => {
        console.log(event.currentTarget);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        console.log(e.currentTarget);
        if(!e.target.classList.contains('MuiButtonBase-root')){
            setAnchorEl(null);
            return
        }
       if(e.target.textContent==='All'){
           setChipData([])
           setAnchorEl(null);
           return
       }
        setChipData([{ key: dataBtn[e.target.textContent], label: e.target.textContent }])
      setAnchorEl(null);
    };


    
      const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      };


    return (
        <div style={{display:'inline-flex',gap:'0px',border:'1px solid #F7F7F71A',backgroundColor:'#333B5280',borderRadius:'8px',padding:'0px 6px'}}>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{display:'flex',gap:'8px',fontFamily:'Montserrat',padding:'2px 10px'}}
          onClick={handleClick}
        >
          <img src={images.status} alt='status'></img> Status:
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
            <MenuItem   onClick={handleClose}>All</MenuItem>
          <MenuItem onClick={handleClose}>Active</MenuItem>
          <MenuItem onClick={handleClose}>Matured</MenuItem>
          <MenuItem onClick={handleClose}>Liquidated</MenuItem>
        </Menu>

        <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        backgroundColor:'transparent',
        border:'none',
        boxShadow:'none',
        width:'initial',
        '& span':{
            padding:'0'
            ,marginRight:'10px'
        },
        '& .MuiButtonBase-root.MuiChip-root':{

padding:'2px 10px',height:'21px',border:'1px solid #4D34A3'
        },
        '& .MuiListItem-root':{
            padding:'0'
        }
      }}
      component="ul"
    >
      {chipData.length === 0 ? <ListItem key={1}>
            <Chip sx={{color:"#344054",padding:'2px 5px',height:'21px',border:'1px solid #D0D5DD',backgroundColor:'white',textAlign:'center', '& span':{
           
            marginRight:'0px'
        }}}
            
              label={'All'}
             
            />
          </ListItem> :
      chipData.map((data) => {
        
        return (
          <ListItem key={data.key}>
            <Chip sx={{color:"white",backgroundColor:colorBtn[data.label]}}
           
              label={data.label}
              deleteIcon={<img src={images.iconClose}></img>}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
      </div>
    );
}

export default FilterOrders;
