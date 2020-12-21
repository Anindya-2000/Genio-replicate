import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import Drawer from './Drawer.js';
import './Drawer.css';
import {useState,setState} from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        backgroundColor:"#fff",
        fontFamily:"'Montserrat'",
        boxShadow:"0 1px 15px rgba(0, 0, 0, 0.1)",
        position:'fixed',
        zIndex:500,
        height:70,
        alignItems:"center",
    },         
    logo:{
        width:200,
        color:"#51a3ff",
        borderStyle:"none",
        paddingLeft:200,
        [theme.breakpoints.down("1300")]:{
            paddingLeft:30
        }
    },
    downloadItem:{
        position:"absolute",
        right:200,
        [theme.breakpoints.down("1300")]:{
            right:30
        }
    },
    downloadBtn:{
        color:"#0a3f7b",
        fontSize:"15px",
        fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
        boxShadow: 'inset 0 0 0 1px, 0 1px 2px rgba(0,0,0,.171)',
        textTransform:"capitalize",
        background: "transparent",
        lineHeight:"34px",
        whiteSpace:"nowrap",
        padding:"0 .7em",
        fontWeight:500,
        height:"2.4em",
        justifySelf:"center",
        alignItems:"center",
        transition:"box-shadow .2s ease-in-out,bottom .2s ease-in-out",
        "&:hover": {
            boxShadow: 'inset 0 0 0 1px, 0 1px 2px,0 5px 10px rgba(0,0,0,.171)',
            bottom:1,
        },
    },
    Drawer:{
        position:"absolute",
        right:30,
    },

}));


const Header = () => {
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false);

    const DropDown = (val) =>{
        const DD = document.getElementsByClassName('headerMenu__wrapper')[0];
        if(val){
            DD.classList.add('DD_animation');
        }
        else{
            DD.classList.remove('DD_animation');
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item  style = {{"position":"absolute"}}>
                <img src = "https://landen.imgix.net/lv76colfak30/assets/xcwpfkou.png?w=400" className = {classes.logo}></img>
            </Grid>

            <Box component = {Grid} item className = {classes.downloadItem} display = {{xs:"none",sm:"block"}}>
                <a href="#" style={{"textDecoration":"none"}}>
                    <Button disableRipple={true} className={classes.downloadBtn} style={{ backgroundColor: 'transparent' }}>
                        Download App
                    </Button>
                </a>
            </Box>

            <Box component={Grid} item display = {{lg:"none",md:"none",sm:"none"}} className = {classes.Drawer}><Drawer isOpen = {isOpen} setIsOpen = {setIsOpen} DropDown = {DropDown}/></Box>
    
            <div className = "headerMenu__wrapper" style = {{"background-color":"#ffffff"}}>
                <ul className = "headerMenu__links">
                    <li>
                        <a className = "drawerLink" href = "#">
                            Download App
                            <svg width = "13" height = "12" xmlns = "http://www.w3.org/2000/svg">
                                <path d = "M9.557 7H1a1 1 0 1 1 0-2h8.586L7.007 2.421a1 1 0 0 1 1.414-1.414l4.243 4.243c.203.202.3.47.292.736a.997.997 0 0 1-.292.735L8.42 10.964A1 1 0 1 1 7.007 9.55L9.557 7z" fill = "#51a3ff"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </Grid>
    );
};

export default Header;