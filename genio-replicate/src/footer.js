import React from 'react';
import {Grid, Typography, Link, IconButton} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css';



export default function footer(){
    
    return(
        <Grid container spacing={0} className="root">
            <Grid item sm={9} xs={12}>
                <Grid container spacing={0} className="footer-left">
                    <Grid item xs={12}>
                        <Typography variant="body2" className="copyright">
                        {'Copyright © '}
                        <Link className="footer-link" href="https://material-ui.com/">
                        Genio App
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="#" className="footer-link">Termsof Services</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="#" className="footer-link">Privacy Policy</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={3} xs={12} className="footer-right">
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton>
                            <LinkedInIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};