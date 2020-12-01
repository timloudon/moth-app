import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    circle: {
        padding: "0",
        width: "150px",
        height: "150px",
        background: "#32e0c4",
        border: "10px solid #000000",
        borderRadius: "50%",
        transform: "rotate(45deg)"
    },
    container: {
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        top: "5px"
    },
    semi: {
        position: "relative",
        left: "5px",
        top: "1px",
        width: "140px",
        height: "70px",
        borderRadius: "138px 138px 0 0",
        background: "#393e46"
    },
    semiBottom: {
        position: "relative",
        left: "5px",
        width: "140px",
        height: "69px",
        borderRadius: "0 0 138px 138px",
        background: "#222831"
    }
}))

function MothLogo() {

    const classes = useStyles();

    return (
        <div className={classes.circle}>
            <div className={classes.container}>
                <div className={classes.semi}></div>
                <div className={classes.semiBottom}></div>
            </div>
        </div>
    )
}

export default MothLogo
