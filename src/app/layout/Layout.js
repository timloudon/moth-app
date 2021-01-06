import React from "react";
import Header from "../../components/common/Header";
import Options from "../../components/Options/Options";
import { Grid } from "@material-ui/core";

export default function Layout(props) {

    const { title, handleOpen, handleClose, changeInstrumentSound, isOpen } = props;

    return (
        <>
            <Header title={title} handleOpen={handleOpen}></Header>
            {/* <Options
                changeInstrumentSound={changeInstrumentSound}
                isOpen={isOpen}
                handleClose={handleClose} /> */}
            {props.children}
        </>
    );
}