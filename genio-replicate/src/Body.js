import React from 'react';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles((theme) => ({
    MainRoot: {
        flexGrow: 1,
        paddingTop: 70,
        height: "auto",
        fontFamily: "'Montserrat', sans-serif",
    },
    section1: {
        padding: "50px 30px 40px",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "50px",
        },
    },
    subsection1: {
        paddingLeft: "40%",
        paddingTop: "10%",
        paddingBottom: "150px",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "25%",
            paddingTop: "3%",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "10%",
            paddingTop: "3%",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            textAlign: "center",
            padding: "3% 10%",
        }
    },
    subsection1_text1: {
        color: "#35423c",
        fontWeight: "lighter",
        fontSize: "2.57em",
        lineHeight: "1.2",
        margin: "0 0 17px",
        whiteSpace: "pre-line",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "28pt"
        }
    },
    subsection1_text2: {
        color: "#5b7167",
        fontWeight: 400,
        fontSize: "1.15em",
        lineHeight: "1.5",
        margin: 0,
        whiteSpace: "pre-line",
        textAlign: "left",
        maxWidth: "500px",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "14pt"
        }
    },
    playStore: {
        border: "none",
        display: "inline-block",
        margin: "30px 0px 10px",
    },
    childImg1: {
        maxWidth: "100%",
        float: "right",
        paddingRight: 20,
        [theme.breakpoints.down("md")]: {
            maxWidth: "85%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 50,
        }

    },
    section2: {
        padding: "0px 30px 0px",
        backgroundColor: "rgba(201, 231, 252, 1)",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "0px",
            paddingRight: "0px",
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: "0px",
        },
    },
    subsection2: {
        paddingLeft: "50%",
        paddingTop: "10%",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "30%",
            paddingTop: "10%",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "10%",
            paddingTop: "20%",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            textAlign: "center",
            padding: "3% 10%",
        }
    },
    subsection2_text1: {
        color: "#35423c",
        fontWeight: "600",
        fontSize: "1.8em",
        lineHeight: "1.1em",
        margin: "0 0 8px",
        whiteSpace: "pre-line",
        textAlign: "left",
        maxWidth: "300px",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "23pt"
        }
    },
    subsection2_text2: {
        color: "#5b7167",
        fontWeight: 400,
        fontSize: "1em",
        lineHeight: "1.5",
        margin: 0,
        whiteSpace: "pre-line",
        textAlign: "left",
        maxWidth: "330px",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "12pt"
        }
    },
    childImg2: {
        maxWidth: "100%",
        paddingLeft: 50,
        [theme.breakpoints.down("md")]: {
            maxWidth: "85%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 20,
            padding: "25px",
            maxWidth: "75%",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "85%",
            // paddingLeft:"30px",
        },

    },
    section3: {
        marginTop: 40,
        marginBottom: 50,
    },
    subsection3: {
        paddingRight: "30%",
        paddingTop: "25%",
        [theme.breakpoints.down("md")]: {
            padding: "10%",
            paddingTop: "25%",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "25% 5% 0 5%",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            textAlign: "center",
            padding: "3% 10% 0",
        }
    },
    subsection3_text1: {
        color: "#35423c",
        fontWeight: "300",
        fontSize: "1.8em",
        lineHeight: "1.3em",
        margin: "0 0 5px",
        whiteSpace: "pre-line",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "23pt"
        }
    },
    subsection3_text2: {
        color: "#5b7167",
        fontWeight: 400,
        fontSize: "1.2em",
        lineHeight: "1.5",
        margin: 0,
        whiteSpace: "pre-line",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "12pt"
        }
    },
    childImg3: {
        maxWidth: "85%",
        paddingLeft: 50,
        [theme.breakpoints.down("md")]: {
            maxWidth: "85%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 20,
            padding: "25px",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "80%",
            paddingLeft: "30px",
            paddingTop: 0,
        },

    },

    section4: {
        padding: "0px 30px 0px",
        marginTop: "-2vw",
        backgroundColor: "rgba(255, 215.59, 209.619, 1)",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingBottom: "50px",
        },
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "0px",
        },
    },

    subsection4: {
        paddingLeft: "50%",
        paddingTop: "15%",
        paddingBottom: "15%",
        marginTop: 50,
        [theme.breakpoints.down("md")]: {
            paddingLeft: "30%",
            paddingTop: "20%",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "10%",
            paddingTop: "20%",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            textAlign: "center",
            padding: "3% 10%",
            marginTop: 70,
        }
    },
    subsection4_text1: {
        color: "#35423c",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "600",
        fontSize: "1.9em",
        lineHeight: "1.1em",
        margin: "0 0 8px",
        whiteSpace: "pre-line",
        textAlign: "left",
        maxWidth: "300px",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "23pt"
        }
    },
    subsection4_text2: {
        color: "#5b7167",
        fontWeight: 400,
        fontSize: "1em",
        lineHeight: "1.5",
        margin: 0,
        whiteSpace: "pre-line",
        textAlign: "left",
        maxWidth: "330px",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "12pt"
        }
    },
    childImg4: {
        maxWidth: "100%",
        marginTop: 80,
        // marginLeft: 50,
        paddingBottom: "8%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "85%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 50,
            padding: "25px",
            paddingRight: 0,
            paddingLeft: 20,
            maxWidth: "75%",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "85%",
            margin: 0,
        },

    },
    section1Svg: {
        position: "absolute",
        bottom: "-3px",
        zIndex: -10000,
    },
    section5: {
        marginTop: 40,
    },
    subsection5: {
        paddingRight: "30%",
        paddingTop: "25%",
        [theme.breakpoints.down("md")]: {
            padding: "10%",
            paddingTop: "25%",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "25% 5% 0 5%",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            textAlign: "center",
            padding: "3% 10% 0",
        }
    },
    subsection5_text1: {
        color: "#35423c",
        fontWeight: "300",
        fontSize: "1.9em",
        lineHeight: "1.3em",
        margin: "0 0 5px",
        whiteSpace: "pre-line",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "23pt"
        }
    },
    subsection5_text2: {
        color: "#5b7167",
        fontWeight: 400,
        fontSize: "1.2em",
        lineHeight: "1.5",
        margin: "5px 0px 20px 0px",
        whiteSpace: "pre-line",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "12pt"
        }
    },
    // subsection5_text3:{
    //     color:"#5b7167",
    //     fontWeight:400,
    //     fontSize:"1.15em",
    //     lineHeight:"1.5",
    //     margin:0,
    //     whiteSpace:"pre-line",
    //     textAlign:"left",
    //     [theme.breakpoints.down("xs")]:{
    //         textAlign:"center", 
    //         fontSize:"12pt"
    //     }
    // },
    subsection5_list: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        fontSize: "1em",
        fontWeight: 400,
        color: "#5b7167",
    },
    subsection5_list_item: {
        marginRight: 20,
        marginBottom: 20,
        alignItems: "center",
        display: "flex",
        fontSize: "0.8em",
    },
    subsection5_list_item_tick:{
        paddingRight: 5,
    },
    childImg5: {
        maxWidth: "85%",
        paddingLeft: 50,
        [theme.breakpoints.down("md")]: {
            maxWidth: "85%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 20,
            padding: "25px",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "80%",
            paddingLeft: "30px",
            paddingTop: 0,
        },

    },
}));

const Body = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.MainRoot}>
            <Grid item style={{ "position": "relative" }}>
                <Grid container direction="row" className={classes.section1}>
                    <Grid item lg={7} md sm={7} xs={12}>
                        <Grid container direction="column" className={classes.subsection1}>
                            <Grid item>
                                <p className={classes.subsection1_text1}>
                                    Give your kids access<br></br> You wish you had!
                        </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection1_text2}>
                                    Feedback from across the world,<br></br>On anything that they do.
                        </p>
                            </Grid>
                            <Grid item className={classes.playStore}>
                                <a href="#" style={{ "textDecoration": "none" }}>
                                    <img src="img/google-play-en.png" style={{ "maxWidth": "100%", "height": "52px" }}></img>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={5} md sm={5} xs={12}>
                        <img src="img/two-childs.png" className={classes.childImg1}></img>
                    </Grid>
                </Grid>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes.section1Svg}><path fill="rgba(201, 231, 252, 1)" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,224C640,181,800,107,960,64C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </Grid>

            <Grid item>
                <Grid container direction="row" className={classes.section2}>
                    <Grid item lg={6} md sm={6} xs={12}>
                        <Grid container direction="column" className={classes.subsection2}>
                            <Grid item>
                                <p className={classes.subsection2_text1}>
                                    Help your kid get connected to their peers
                            </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection2_text2}>
                                    Kids learn a lot from their friends. Help bring that learning back.
                            </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} md sm={6} xs={12} align="center">
                        <img src="img/discuss.png" className={classes.childImg2}></img>
                    </Grid>
                </Grid>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" style={{ "position": "relative", "bottom": "3px" }}><path fill="rgba(201, 231, 252, 1)" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,106.7C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </Grid>

            <Grid item style={{ "position": "relative" }}>
                <Grid container direction="row" className={classes.section3}>
                    <Box component={Grid} item lg={6} md sm={6} xs={12} display={{ lg: "none", md: "none", sm: "none" }}>
                        <Grid container direction="column" className={classes.subsection3}>
                            <Grid item>
                                <p className={classes.subsection3_text1}>
                                    Build Portfolio and Memories
                            </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection3_text2}>
                                    Save your kid's work and look back at them as they grow up
                            </p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid item lg={6} md sm={6} xs={12}>
                        <img src="img/ideas.png" className={classes.childImg3}></img>
                    </Grid>
                    <Box component={Grid} item lg={6} md sm={6} xs={12} display={{ xs: "none", lg: "block", md: "block", sm: "block" }}>
                        <Grid container direction="column" className={classes.subsection3}>
                            <Grid item>
                                <p className={classes.subsection3_text1}>
                                    Build Portfolio and Memories
                            </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection3_text2}>
                                    Save your kid's work and look back at them as they grow up
                            </p>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ "position": "absolute", "bottom": "0px" }}><path fill="#ffd8d2" fill-opacity="1" d="M0,288L1440,224L1440,320L0,320Z"></path></svg>
            </Grid>

            <Grid item>
                <Grid container direction="row" className={classes.section4}>
                    <Grid item lg={6} md sm={6} xs={12}>
                        <Grid container direction="column" className={classes.subsection4}>
                            <Grid item>
                                <p className={classes.subsection4_text1}>
                                    Showcase and Get Feedback
                            </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection4_text2}>
                                    Upload your kid's work to get feedback from kids and parents across the world
                            </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} md sm={6} xs={12} align="center" justify="center">
                        <img src="img/icons.png" className={classes.childImg4}></img>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" className={classes.section5}>
                    <Box component={Grid} item lg={6} md sm={6} xs={12} display={{ lg: "none", md: "none", sm: "none" }}>
                        <Grid container direction="column" className={classes.subsection5}>
                            <Grid item>
                                <p className={classes.subsection5_text1}>
                                    Improve your Kid's Knowledge
                            </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection5_text2}>
                                    Quizzes, News and much more.....
                            </p>
                            </Grid>
                            <Grid item>
                                {/* <div className={classes.subsection5_list}>
                                <div className={classes.subsection5_list_item}><DoneIcon className={classes.tick} />Curated</div>
                                <div className={classes.subsection5_list_item}><DoneIcon className={classes.tick} />Informational</div>
                                <div className={classes.subsection5_list_item}><DoneIcon className={classes.tick} />Safe for children</div>
                            </div> */}
                                <div class={classes.subsection5_list}>
                                    <div class={classes.subsection5_list_item}>
                                        <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g>
                                        </svg>
                                    Curated
                                </div>
                                    <div class={classes.subsection5_list_item}>
                                        <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g>
                                        </svg>
                                    Informational
                                </div>
                                    <div class={classes.subsection5_list_item}>
                                        <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g>
                                        </svg>
                                    Safe for Children
                                </div>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>
                    <Grid item lg={6} md sm={6} xs={12}>
                        <img src="img/sitting.png" className={classes.childImg5}></img>
                    </Grid>
                    <Box component={Grid} item lg={6} md sm={6} xs={12} display={{ xs: "none", lg: "block", md: "block", sm: "block" }}>
                        <Grid container direction="column" className={classes.subsection5}>
                            <Grid item>
                                <p className={classes.subsection5_text1}>
                                    Improve your kid's knowledge
                            </p>
                            </Grid>
                            <Grid item>
                                <p className={classes.subsection5_text2}>
                                    Quizzes, News and much more.....
                            </p>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.subsection5_list}>
                                    <div className={classes.subsection5_list_item}>
                                    <div className={classes.subsection5_list_item_tick}>
                                        <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g>
                                        </svg>
                                    </div>
                                    Curated
                                </div>
                                    <div className={classes.subsection5_list_item}>
                                    <div className={classes.subsection5_list_item_tick}>
                                        <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g>
                                        </svg>
                                    </div>
                                    Informational
                                </div>
                                    <div className={classes.subsection5_list_item}>
                                    <div className={classes.subsection5_list_item_tick}>
                                        <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66"><polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon></g></g>
                                        </svg>
                                    </div>
                                    Safe for Children
                                </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Grid>
    )
};

export default Body;