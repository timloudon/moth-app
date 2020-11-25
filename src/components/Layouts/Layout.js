import React from "react";
// Components
import Header from "./Header";
import Options from "../Options/Options";
// MaterialUI
import { Grid } from "@material-ui/core";

export default function Layout(props) {

    console.log("Layout Rendered")

    const { title, handleOpen, handleClose, changeInstrumentSound, isOpen } = props;

    return (
        <Grid item>
            <Header title={title} handleOpen={handleOpen}></Header>
            <Options
                changeInstrumentSound={changeInstrumentSound}
                isOpen={isOpen}
                handleClose={handleClose} />
            <Grid item>
                <div style={{ margin: '50px', align: 'auto' }}>{props.children}</div>
            </Grid>
        </Grid>
    );
}