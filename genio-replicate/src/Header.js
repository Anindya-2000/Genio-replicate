import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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

}));


const Header = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item  style = {{"position":"absolute"}}>
                <img src = "https://landen.imgix.net/lv76colfak30/assets/xcwpfkou.png?w=400" className = {classes.logo}></img>
            </Grid>

            <Grid item className = {classes.downloadItem}>
                <a href="#" style={{"textDecoration":"none"}}>
                    <Button disableRipple={true} className={classes.downloadBtn} style={{ backgroundColor: 'transparent' }}>
                        Download App
                    </Button>
                </a>
            </Grid>
        </Grid>
    );
};

export default Header;