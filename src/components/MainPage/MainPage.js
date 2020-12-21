import React from 'react';
import { Link } from 'react-router-dom';
import MothLogo from '../common/MothLogo';
import { Grid, Typography, Button, ButtonBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // menuButton: {
    //     '&:hover': 
    // }
}));

export default function MainPage() {
    return (
        <Grid container spacing={4}>
            <Grid item container xs={12}>
                <ButtonBase
                    disableRipple={true}
                    component={Link}
                    to={{
                        pathname: "../Exercise/ExerciseContainer",
                        state: {
                            scale: { type: "Major" },
                            cadence: { type: "Major" }
                        }
                    }}>
                    <Grid item>
                        <MothLogo />
                    </Grid>
                    <Grid item>
                        <Typography variant="button">MAJOR</Typography>
                    </Grid>
                </ButtonBase>
            </Grid>
            <Grid item xs={12}>
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
                    <Grid item>
                        <MothLogo />
                    </Grid>
                    <Grid item>
                        <Typography variant="button">MINOR</Typography>
                    </Grid>
                </ButtonBase>
            </Grid>
            <Grid item xs={12}>
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
                    <Grid item>
                        <MothLogo />
                    </Grid>
                    <Grid item>
                        <Typography variant="button">MAJOR CHROMATIC</Typography>
                    </Grid>
                </ButtonBase>
            </Grid>
            <Grid item xs={12}>
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
                    <Grid item>
                        <MothLogo />
                    </Grid>
                    <Grid item>
                        <Typography variant="button">MINOR CHROMATIC</Typography>
                    </Grid>
                </ButtonBase>
            </Grid>
        </Grid >
    )
}