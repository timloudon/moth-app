import React from "react";
// Components
import Header from "./Header";
// MaterialUI
import { Grid } from "@material-ui/core";

export default function Layout(props) {

    const { title } = props;

    return (
        <Grid item>
            <Header title={title}></Header>
            <Grid item>
                <div style={{ margin: '50px', align: 'auto' }}>{props.children}</div>
            </Grid>
        </Grid>
    );
}