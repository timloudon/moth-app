import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import MothLogo from './MothLogo';
import { scalePatterns } from '../../resources/musicResources';

function MothButton({ buttonText, isFinishedQuestion, onClickHandler }) {

    const widthAndHeight = 85;

    const useStyles = makeStyles((theme) => ({
        button: isFinishedQuestion => {
            return {
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr',
                borderRadius: "50%",
                padding: '0',
                border: 'none',
                // Maybe remove for accesability?
                outline: "none",
                transform: isFinishedQuestion ? null : 'scale(0.98, 0.98)',
                opacity: isFinishedQuestion ? '1' : '0.5',
                boxShadow: isFinishedQuestion ? "0px 2.6704px 2.6704px rgba(0,0,0,.25)" : "0px 1.6704px 1.6704px rgba(0,0,0,.25)",
                transitionDuration: "0.4s",
                cursor: isFinishedQuestion ? 'pointer' : 'default',
                '&:hover': isFinishedQuestion ? {
                    backgroundColor: theme.palette.secondary.main,
                } : {
                        backgroundColor: "#ffffff",
                    }
            }
        },
        text: isFinishedQuestion => {
            return {
                gridColumnStart: '1',
                gridColumnEnd: '2',
                gridRowStart: '1',
                gridRowEnd: '2',
                zIndex: '3',
                justifySelf: 'center',
                alignSelf: 'center',
                color: '#ffffff',
                transform: isFinishedQuestion ? 'scale(1, 1)' : 'scale(0.98, 0.98)',
                opacity: isFinishedQuestion ? '1' : '0.5',
            }
        },
        logo: {
            gridColumnStart: '1',
            gridColumnEnd: '2',
            gridRowStart: '1',
            gridRowEnd: '2',
            zIndex: '2',
            justifySelf: 'center',
            alignSelf: 'center',
        }
    }))

    const classes = useStyles(isFinishedQuestion);

    return (
        <button type="button" disabled={!isFinishedQuestion} onClick={onClickHandler} className={classes.button} >
            { buttonText === undefined
                ? <></>
                : <Typography className={classes.text} variant="button">{buttonText}</Typography>}
            <div className={classes.logo}>
                <MothLogo widthAndHeight={widthAndHeight} />
            </div>
        </button >
    )
}

export default MothButton
