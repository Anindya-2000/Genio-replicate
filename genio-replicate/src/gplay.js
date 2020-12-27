import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import './css/gplay.css';

export default function gplay() {
    return (
        <Grid container spacing={0} className="root-cont">
            <Grid item xs={12} >
                <h2 className="gplay-text">Start your kid's journey</h2>
            </Grid>
            <Grid item xs={12} className="gplay-container">
                <a href = "https://play.google.com/store/apps/details?id=com.genioclub.app">
                    <img src="https://d5c8j8afeo6fv.cloudfront.net/google-play-en.png" alt="" className="gplay" />
                </a>
            </Grid>
        </Grid>
    );
}