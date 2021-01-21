import React from 'react';
import { Link } from 'react-router-dom';
import MothLogo from '../common/MothLogo';
import MothButton from '../common/MothLogo';
import { Grid, Typography, Button, ButtonBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    buttonBase: {
        '&:hover': {}
    }
}));

export default function MainPage() {

    const classes = useStyles();

    return (
        <>
            <Grid item xs={false} sm={3}></Grid>
            <Grid item container
                xs={12}
                sm={6}
                direction="column"
                justify="space-evenly"
                alignItems="flex-start"
                spacing={4}
                style={{ height: "85vh" }}>
                <Grid item>
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
                        <Typography variant="button" style={{ paddingLeft: "15px" }}>MAJOR</Typography>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <ButtonBase
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
                        <Typography variant="button" style={{ paddingLeft: "15px" }}>MINOR</Typography>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <ButtonBase
                        disableRipple={true}
                        component={Link}
                        to={{
                            pathname: "../Exercise/ExerciseContainer",
                            state: {
                                scale: { type: "Chromatic" },
                                cadence: { type: "Major" }
                            }
                        }}>
                        <MothLogo />
                        <Typography variant="button" style={{ paddingLeft: "15px" }} noWrap>MAJOR CHROMATIC</Typography>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <ButtonBase
                        disableRipple={true}
                        component={Link}
                        to={{
                            pathname: "../Exercise/ExerciseContainer",
                            state: {
                                scale: { type: "Chromatic" },
                                cadence: { type: "Minor" }
                            }
                        }}>
                        <MothLogo />
                        <Typography variant="button" style={{ paddingLeft: "15px" }} noWrap>MINOR CHROMATIC</Typography>
                    </ButtonBase>
                </Grid>
            </Grid>
            <Grid item xs={false} sm={3}></Grid>
        </>
    )
}