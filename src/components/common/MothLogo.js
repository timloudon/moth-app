import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

function MothLogo({ widthAndHeight, isFinishedQuestion }) {

    const width = widthAndHeight || 85;
    const height = widthAndHeight || 85;
    const innerWidth = Math.round(width / 1.235294); // 68
    const innerHeight = Math.round(height / 2.4285714286); // 35
    const edgeWidth = Math.round(width / 28.28); // 

    const useStyles = makeStyles((theme) => ({
        circle: {
            display: 'grid',
            zIndex: '0',
            gridTemplateRows: `${edgeWidth}px 1fr 1fr ${edgeWidth}px`,
            gridTemplateColumns: `${height}px`,
            padding: "0",
            width: `${width}px`,
            height: `${height}px`,
            border: `${edgeWidth}px solid #000000`,
            borderRadius: "50%",
            transform: "rotate(45deg)",
            // boxShadow: "0px 2.6704px 2.6704px rgba(0,0,0,.25)",
        },
        container: {
            left: "50%",
            transform: "translateX(-50%)",
            top: "0.2106rem"
        },
        semi: {
            gridRowStart: '2',
            alignSelf: 'end',
            justifySelf: 'center',
            width: `${innerWidth}px`,
            height: `${innerHeight}px`,
            borderRadius: `${innerWidth}px ${innerWidth}px 0 0`,
            background: "#393e46",
            zIndex: '1',
        },
        semiBottom: {
            gridRowStart: '3',
            alignSelf: 'start',
            justifySelf: 'center',
            width: `${innerWidth}px`,
            height: `${innerHeight}px`,
            borderRadius: `0 0 ${innerWidth}px ${innerWidth}px`,
            background: "#222831",
            zIndex: '1'
        },
        backgroundCircle: {
            gridRowStart: '2',
            gridRowEnd: '4',
            alignSelf: 'center',
            justifySelf: 'center',
            width: `${innerWidth}px`,
            height: `${innerWidth}px`,
            background: "#393e46",
            borderRadius: `${innerWidth - 2}px ${innerWidth - 2}px ${innerWidth - 2}px ${innerWidth - 2}px`,
            zIndex: '-1'
        }
    }))

    const classes = useStyles(isFinishedQuestion);

    return (
        <>
            <div className={classes.circle}>
                <div className={classes.semi}>
                    <div className={classes.backgroundCircle}></div>
                </div>
                <div className={classes.semiBottom}></div>
            </div>
        </>
    )
}

export default MothLogo
