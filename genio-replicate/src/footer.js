import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import './css/footer.css';
const styles = makeStyles((theme) => ({
    iconStyle: {
        '& svg': {
            fontSize: 26
        }
    },
    footerRight: {
        paddingRight: "10%",
        color: "#eaefec",
        fontSize: "26px",
        alignContent: "center",
        [theme.breakpoints.down("md")]: {
            paddingRight: "10px",
        },
        [theme.breakpoints.down("xs")]: {
            paddingBottom: "10px",
        }
    },
    footerLeft: {
        paddingLeft: "15%",
        paddingTop: "30px",
        paddingBottom: "30px",
        fontSize: 12,
        alignContent: "center",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "20px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "20px 0px 0px 10px",
        }
    }
}));



export default function footer() {
    const classes = styles();
    return (
        <Grid container spacing={0} className="root">
            <Grid item md={8} sm={8} xs={12}>
                <Grid container spacing={0} className={classes.footerLeft}>
                    <Grid item xs={12}>
                        <span className="copyright">© 2020 Genio App</span>
                    </Grid>
                    <div>
                        <Link to="/tnc"  className="footer-link">Terms of Service</Link>
                        <Link to="/privacy"  className="footer-link">Privacy Policy</Link>
                    </div>
                </Grid>
            </Grid>
            <Grid container item md={4} sm={4} xs={12} className={classes.footerRight}>
                <IconButton >
                    <TwitterIcon className="icon" />
                </IconButton>
                <IconButton  >
                    <LinkedInIcon className="icon" />
                </IconButton>
                <IconButton  >
                    <FacebookIcon className="icon" />
                </IconButton>
            </Grid>
        </Grid>
    );
};