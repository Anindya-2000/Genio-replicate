import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import './Drawer.css';
import { useState, setState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#fff",
        fontFamily: "'Montserrat'",
        boxShadow: "0 1px 15px rgba(0, 0, 0, 0.1)",
        position: 'fixed',
        zIndex: 500,
        height: 70,
        alignItems: "center",
    },
    logo: {
        width: 200,
        color: "#51a3ff",
        borderStyle: "none",
        paddingLeft: 200,
        [theme.breakpoints.down("1300")]: {
            paddingLeft: 30
        }
    },
    downloadItem: {
        position: "absolute",
        right: 200,
        [theme.breakpoints.down("1300")]: {
            right: 30
        }
    },
    downloadBtn: {
        color: "#0a3f7b",
        fontSize: "15px",
        fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
        boxShadow: 'inset 0 0 0 1px, 0 1px 2px rgba(0,0,0,.171)',
        textTransform: "capitalize",
        background: "transparent",
        lineHeight: "34px",
        whiteSpace: "nowrap",
        padding: "0 .7em",
        fontWeight: 500,
        height: "2.4em",
        justifySelf: "center",
        alignItems: "center",
        transition: "box-shadow .2s ease-in-out,bottom .2s ease-in-out",
        "&:hover": {
            boxShadow: 'inset 0 0 0 1px, 0 1px 2px,0 5px 10px rgba(0,0,0,.171)',
            bottom: 1,
        },
    },
    Drawer: {
        position: "absolute",
        right: 30,
    },

}));


const Header = () => {
    const classes = useStyles();
    let isOpen = false;

    useEffect(() => {
        window.addEventListener('click', (ev) => {
            if (!ev.target.matches('.DontClose') && !ev.target.matches('.bars')) {
                console.log(isOpen, ev.target)
                if (isOpen)
                    rotateDivs();
            }
        })
        return false;
    }, [1]);

    const DropDown = (val) => {
        const DD = document.getElementsByClassName('headerMenu__wrapper')[0];
        if (val) {
            DD.classList.add('DD_animation');
        }
        else {
            DD.classList.remove('DD_animation');
        }
    }

    const rotateDivs = () => {
        const div1 = document.getElementsByClassName("stick-1")[0];
        const div2 = document.getElementsByClassName("stick-2")[0];
        const div3 = document.getElementsByClassName("stick-3")[0];
        if (isOpen) {
            isOpen = false;
            div2.style.display = "block";
            div1.classList.remove('rotate-cc');
            div3.classList.remove('rotate-c');
            DropDown(0);
        }
        else {
            isOpen = true;
            div2.style.display = "none";
            div1.classList.add('rotate-cc');
            div3.classList.add('rotate-c');
            DropDown(1);
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item style={{ "position": "absolute" }}>
                <img src="img/genio.png" className={classes.logo}></img>
            </Grid>

            <Box component={Grid} item className={classes.downloadItem} display={{ xs: "none", sm: "block" }}>
                <a href="#" style={{ "textDecoration": "none" }}>
                    <Button disableRipple={true} className={classes.downloadBtn} style={{ backgroundColor: 'transparent' }}>
                        Download App
                    </Button>
                </a>
            </Box>

            <Box component={Grid} item display={{ lg: "none", md: "none", sm: "none" }} className={classes.Drawer}>
                <a href="javascript:void(0)" style={{ "position": "relative" }} className="bars">
                    <div onClick={() => rotateDivs()} className="container bars">
                        <div className="stick stick-1 bars"></div>
                        <div className="stick stick-2 bars"></div>
                        <div className="stick stick-3 bars"></div>
                    </div>
                </a>
            </Box>

            <div className="headerMenu__wrapper DontClose" style={{ "background-color": "#ffffff" }}>
                <ul className="headerMenu__links DontClose">
                    <li>
                        <a className="drawerLink DontClose" href="#">
                            Download App
                            <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg" className="DontClose">
                                <path className="DontClose" d="M9.557 7H1a1 1 0 1 1 0-2h8.586L7.007 2.421a1 1 0 0 1 1.414-1.414l4.243 4.243c.203.202.3.47.292.736a.997.997 0 0 1-.292.735L8.42 10.964A1 1 0 1 1 7.007 9.55L9.557 7z" fill="#51a3ff"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </Grid>
    );
};

export default Header;