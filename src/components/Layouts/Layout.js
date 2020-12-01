import React from "react";
// Components
import Header from "./Header";
import Options from "../Options/Options";
// MaterialUI
import { Grid } from "@material-ui/core";

export default function Layout(props) {

    const { title, handleOpen, handleClose, changeInstrumentSound, isOpen } = props;

    return (
        <>
            <Grid item>
                <Header title={title} handleOpen={handleOpen}></Header>
                <Options
                    changeInstrumentSound={changeInstrumentSound}
                    isOpen={isOpen}
                    handleClose={handleClose} />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={1} />
                <Grid item xs={12} sm={10}>
                    <div style={{ margin: '50px', align: 'auto' }}>{props.children}</div>
                </Grid>
                <Grid item xs={false} sm={1} />
            </Grid>
        </>
    );
}