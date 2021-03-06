import React, { useEffect, useRef } from 'react'
import { makeStyles, LinearProgress } from '@material-ui/core';

function ProgressBar({ dataLogRef, exerciseLength }) {

    const max = exerciseLength + 1;
    const min = 0;

    const normalize = value => (value - min) * 100 / (max - min);

    const progressCount = dataLogRef.current.ctxTimeOnCorrect.length;
    console.log(`progressCount: `, progressCount);
    const prevProgressRef = useRef();
    useEffect(() => {
        prevProgressRef.current = progressCount;
    });
    const prevProgressCount = prevProgressRef.current;

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            height: '10px',
            backgroundColor: theme.palette.secondary.light
        },
    }))

    const classes = useStyles();

    return (
        <LinearProgress className={classes.root} variant="determinate" value={normalize(progressCount)} />
    )
}

export default ProgressBar
