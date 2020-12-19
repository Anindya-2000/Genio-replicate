import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import './gplay.css';

export default function gplay(){
    return(
        <Grid container spacing={0}>
            <Container>
                <Grid item xs={12} >
                    <Typography variant="h3" align="center" className="gplay-text" >Start your kid's journey.</Typography>
                </Grid>
                <Grid item xs={12} className="gplay-container">
                    <img src="img/google_play_logo.png" alt="" className="gplay"/>
                </Grid>
            </Container>
        </Grid>
    );
}