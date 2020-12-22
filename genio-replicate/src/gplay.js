import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import './gplay.css';

export default function gplay(){
    return(
        <Grid container spacing={0}>
            <Container>
                <Grid item xs={12} >
                    <p className="gplay-text">Start your kid's journey</p>"
                </Grid>
                <Grid item xs={12} className="gplay-container">
                    <img src="img/google-play-en.png" alt="" className="gplay"/>
                </Grid>
            </Container>
        </Grid>
    );
}