import { Grid, Container, Typography } from '@material-ui/core';
import React from 'react'
import './css/improve.css'
import DoneIcon from '@material-ui/icons/Done';

export default function improve() {
    return (
        <Grid container spacing={0}>
            <Grid item sm={6} xs={12} className="image">
                <img src='https://d5c8j8afeo6fv.cloudfront.net/sitting.png' className="sitting-img" alt="" />
            </Grid>
            <Grid item sm={6} xs={12} className="text">
                <Grid container spacing={0} >
                    <Grid item xs={12} >
                        <Typography variant="h4" className="top-text">Improve your kid's knowledge</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className="light">Quizzes, News and much more...</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0}>
                            <Grid item xs={1}>
                                <DoneIcon className="tick" />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2">Curated</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <DoneIcon className="tick" />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2">Curated</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <DoneIcon className="tick" />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2">Curated</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
}