import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import MothLogo from '../../shared/logos/MothLogo';
import { Grid, Typography } from '@material-ui/core';

export default function MainPage() {
    return (
        <Grid container spacing={4}>
            <Grid item container xs={12}>
                <Button
                    fullWidth
                    disableRipple={true}
                    component={Link}
                    to={{
                        pathname: "../Exercise/ExerciseContainer",
                        state: {
                            scale: { type: "Major" },
                            cadence: { type: "Major" }
                        }
                    }}>
                    <Grid item xs={5} style={{ flex: 1 }}>
                        <MothLogo />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid item xs={8}>
                            <Typography variant="h2">MAJOR</Typography>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    disableRipple={true}
                    component={Link}
                    to={{
                        pathname: "../Exercise/ExerciseContainer",
                        state: {
                            scale: { type: "Minor" },
                            cadence: { type: "Minor" }
                        }
                    }}>
                    <Grid item xs={5} style={{ flex: 1 }}>
                        <MothLogo />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid item xs={8}>
                            <Typography variant="h2">MINOR</Typography>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    disableRipple={true}
                    component={Link}
                    to={{
                        pathname: "../Exercise/ExerciseContainer",
                        state: {
                            scale: { type: "Chromatic" },
                            cadence: { type: "Major" }
                        }
                    }}>
                    <Grid item xs={5} style={{ flex: 1 }}>
                        <MothLogo />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid item xs={8}>
                            <Typography variant="h2">MAJOR CHROMATIC</Typography>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    disableRipple={true}
                    component={Link}
                    to={{
                        pathname: "../Exercise/ExerciseContainer",
                        state: {
                            scale: { type: "Chromatic" },
                            cadence: { type: "Minor" }
                        }
                    }}>
                    <Grid item xs={5} style={{ flex: 1 }}>
                        <MothLogo />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid item xs={8}>
                            <Typography variant="h2">MINOR CHROMATIC</Typography>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Button>
            </Grid>
        </Grid >
    )
}