import React from "react";
// Components
import SoundButtonContainer from "../Exercise/SoundButtonContainer";
// MaterialUI
import {
    makeStyles,
    Grid,
    Typography,
    Modal
} from "@material-ui/core";
import "typeface-roboto";

// Modal useStyles
const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: "#eeeeee",
        border: '2px solid #000',
    }
}));

function Options(props) {

    const { changeInstrumentSound, isOpen, handleClose } = props;

    // useStyle classes
    const classes = useStyles();

    // JSX for the modal
    const modalBody = (
        <Grid container item
            spacing={7}
            xs={8}
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            className={classes.paper}>

            <Grid item
                xs={12}>
                <Typography variant="h5" align="center">Select Instrument Sound</Typography>
            </Grid>

            <Grid item
                xs={12}>
                <SoundButtonContainer
                    changeInstrumentSound={changeInstrumentSound} />
            </Grid>

        </Grid>
    )

    return (

        <Grid container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="stretch" >

            <Modal
                open={isOpen}
                onClose={handleClose}
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description" >
                {modalBody}
            </Modal>

        </Grid>
    );
}

export default Options;
