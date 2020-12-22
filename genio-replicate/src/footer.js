import React from 'react';
import {Grid, Typography, Link, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './footer.css';


const styles = makeStyles((theme) => ({
    iconStyle:{
        '& svg': {
            fontSize: 26
        }
    }
}));



export default function footer(){
    const classes= styles();
    return(
        <Grid container spacing={0} className="root">
            <Grid item sm={9} xs={12}>
                <Grid container spacing={0} className="footer-left">
                    <Grid item xs={12}>
                        {/* <Typography className="copyright">
                        {'© '}
                        <Link className="footer-link" href="https://material-ui.com/">
                        Genio App
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                        </Typography> */}
                        <span className="copyright">© 2020 Genio App</span>
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Link href="#" className="footer-link">Termsof Services</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="#" className="footer-link">Privacy Policy</Link>
                    </Grid> */}
                    <div>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                    </div>
                </Grid>
            </Grid>
            <Grid item sm={3} xs={12} className="footer-right">
                <IconButton >
                    <TwitterIcon fontSize="large" className="icon"/>
                </IconButton>
                <IconButton  >
                    <LinkedInIcon fontSize="large" className="icon"/>
                </IconButton>
                <IconButton  >
                    <FacebookIcon fontSize="large" className="icon"/>
                </IconButton>
            </Grid>
        </Grid>
    );
};