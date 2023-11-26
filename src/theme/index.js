import { createTheme } from "@mui/material";

export default createTheme({
    breakpoints: {
        values:{
            xs:  320,
            sm: 428 ,
            md: 768 ,
            lg:1024,
            xl: 1440,
        }
    },
    palette:{
        primary:{
    main: '#FFFFFF',
        },
        secondary:{
main: '#1E1E1E'
        },
        background:{
main: '#161c2a'
        },
        success:{
            main:'#2BB596'
        },
        purple:{
            main: '#9578F9'
        },

            purpleBG:{
                main: '#7A56F8'
            },
            errorSell:{
                main: '#F33E29'
            }
    },
    tableCell:{
        tableCellHead:{
            color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'
        },
        tableBdy:{
            fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '17px',
    color:'white',
    letterSpacing: '0.04em',
    textAlign: 'left',
    
        }
    },
    typography:{
fontFamily:'IBM Plex Mono',

h1:{
    fontFamily:'"IBM Plex Mono",monospace',
fontSize: '64px',
fontWeight: '400',
lineHeight: '70px',
letterSpacing: '0px',
},
p:{
    fontFamily:'"IBM Plex Mono",monospace',

    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '31px',
    letterSpacing: '0.04px',

},
h2:{
    fontFamily:'"IBM Plex Mono",monospace',
    fontSize: '48px',
    fontWeight: '400',
    lineHeight: '52px',
    letterSpacing: '0px',
    },
    h3:{

    },
    subtitle1:{
        fontFamily:'Montserrat',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '25px',
        letterSpacing: '0.04em',
    },
    caption:{
        fontFamily: 'Montserrat',
fontSize: '10px',
fontWeight: '500',
lineHeight: '14px',
letterSpacing: '0.04em',
textAlign: 'left',

    },
    tableBody:{
       
    },
    tableCellMain:{
        fontFamily: 'Montserrat',
fontSize: '12px',
fontWeight: '400',
lineHeight: '17px',
color:'white',
letterSpacing: '0.04em',
textAlign: 'left',

    }
    },
    components:{
        MuiPaper:{
            styleOverrides:{
            root:{
                background:'#1E1E1E',
                color:'white',
                border:'1px solid white',
                width:'190px',
                '& .MuiMenu-list':{
                    paddingTop:'0px',
                    paddingBottom:'0px'
                },'& .MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root':{display:'flex',gap:'8px'},
                '& .MuiMenuItem-gutters.MuiButtonBase-root.MuiMenuItem-gutters.MuiMenuItem-root':{
                    backgroundColor:'transparent',
                    '&:hover':{
                        color:'#9578F9'
                                        },
                                        '&:focus':{
background:'transparent'
                                        }
                },
                '&:focus .MuiSelect-select.MuiInputBase-input.MuiInput-input':{
                    backgroundColor:'transparent'
                }, '& .MuiSelect-select.MuiInputBase-input.MuiInput-input:focus':{
                    backgroundColor:'transparent'
                }
            }
        }},
        MuiFormControl:{
            styleOverrides:{
                root:{
            '&:focus .MuiSelect-select.MuiInputBase-input.MuiInput-input':{
                backgroundColor:'transparent'
            }, '& .MuiSelect-select.MuiInputBase-input.MuiInput-input:focus':{
                backgroundColor:'transparent'
            }  }}

        }
    }
  
              
           
     
        
   
})
