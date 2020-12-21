import React from 'react';
import LoadingSpinner from '../../icons/LoadingSpinner.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    animatedItem: {
        position: 'absolute',
        background: 'transparent',
        animation: '$spin 1s linear infinite',
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    '@keyframes spin': {
        '100%': {
            transform: 'rotate(360deg)'
        }
    }
});

function SpinnerLogo() {

    const classes = useStyles();

    return (
        <img className={classes.animatedItem} src={LoadingSpinner} alt="Loading spinner" />
    )
}

export default SpinnerLogo
