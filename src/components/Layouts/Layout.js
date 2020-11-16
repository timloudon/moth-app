import React from "react";
// Components
import Header from "./Header";
import Footer from "./Footer";
// MaterialUI
import { Grid } from "@material-ui/core";

export default function Layout(props) {
    return (
        <Grid item>
            <Header title="Title"></Header>
            <Grid item>
                <div>{props.children}</div>
            </Grid>
            <Footer></Footer>
        </Grid>
    );
}