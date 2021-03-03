import React from 'react';
import { Link } from 'react-router-dom';
import MothLogo from '../common/MothLogo';
import { Grid, Typography, ButtonBase, makeStyles } from '@material-ui/core';
import Footer from '../common/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    container: {
    },
    buttonBase: {
        '&:hover': {},
    }
}));

export default function MainPage() {

    const classes = useStyles();

    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.root}
            >
                <Grid container item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={3}
                    xs={12}
                    className={classes.container}
                >
                    <Grid container item xs={6}>
                        <ButtonBase
                            className={classes.buttonBase}
                            disableRipple={true}
                            component={Link}
                            to={{
                                pathname: "../Exercise/ExerciseContainer",
                                state: {
                                    scale: { type: "Major" },
                                    cadence: { type: "Major" }
                                }
                            }}>
                            <MothLogo />
                            <Typography variant="button">MAJOR</Typography>
                        </ButtonBase>
                    </Grid>
                    <Grid container item xs={6}>
                        <ButtonBase
                            className={classes.buttonBase}
                            disableRipple={true}
                            component={Link}
                            to={{
                                pathname: "../Exercise/ExerciseContainer",
                                state: {
                                    scale: { type: "Minor" },
                                    cadence: { type: "Minor" }
                                }
                            }}>
                            <MothLogo />
                            <Typography variant="button">MINOR</Typography>
                        </ButtonBase>
                    </Grid>
                    <Grid container item xs={6}>
                        <ButtonBase
                            className={classes.buttonBase}
                            disableRipple={true}
                            component={Link}
                            to={{
                                pathname: "../Exercise/ExerciseContainer",
                                state: {
                                    scale: { type: "Major" },
                                    cadence: { type: "Major" }
                                }
                            }}>
                            <MothLogo />
                            <Typography variant="button">MAJOR CHROMATIC</Typography>
                        </ButtonBase>
                    </Grid>
                    <Grid container item xs={6}>
                        <ButtonBase
                            className={classes.buttonBase}
                            disableRipple={true}
                            component={Link}
                            to={{
                                pathname: "../Exercise/ExerciseContainer",
                                state: {
                                    scale: { type: "Minor" },
                                    cadence: { type: "Minor" }
                                }
                            }}>
                            <MothLogo />
                            <Typography variant="button">MINOR CHROMATIC</Typography>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}