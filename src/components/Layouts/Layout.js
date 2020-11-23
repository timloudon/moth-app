import React from "react";
// Components
import Header from "./Header";
import Options from "../Options/Options";
// MaterialUI
import { Grid } from "@material-ui/core";

export default function Layout(props) {

    const { title, handleOpen, handleClose, changeInstrumentSound, open } = props;

    return (
        <Grid item>
            <Header title={title} handleOpen={handleOpen}></Header>
            <Options
                changeInstrumentSound={changeInstrumentSound}
                open={open}
                handleClose={handleClose} />
            <Grid item>
                <div style={{ margin: '50px', align: 'auto' }}>{props.children}</div>
            </Grid>
        </Grid>
    );
}