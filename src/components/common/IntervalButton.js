import React from "react";
import { ButtonBase, makeStyles, Typography } from "@material-ui/core";
import MothLogo from "./MothLogo";

function IntervalButton({ isFinishedQuestion, buttonText, onClickHandler }) {

    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            gridTemplateArea: 'overlap',
            fontFamily: theme.typography.button
        },
        logo: {
            gridArea: 'overlap',
            justifySelf: 'center',
            zIndex: "1"
        },
        root: {
            gridArea: 'overlap',
            justifySelf: 'center',
            alignSelf: 'center',
            zIndex: "2",
            color: 'white'
        }
    }))

    const classes = useStyles()

    console.log('!isFinishedQuestion: ', !isFinishedQuestion);

    return (
        <ButtonBase
            variant="contained"
            // style={{ textTransform: 'lowercase' }}
            className={classes.container}
            onClick={onClickHandler}
            disableRipple
            disabled={!isFinishedQuestion}
        >
            <div className={classes.container}>
                <div className={classes.logo}>
                    <MothLogo isFinishedQuestion={isFinishedQuestion} />
                </div>
                <div className={classes.root}>
                    <Typography variant="button">{buttonText}</Typography>
                </div>
            </div>
        </ButtonBase>
    );
}

export default IntervalButton;