import React from "react";
import { useLocation } from "react-router-dom";
// Components
import Header from "./Header";
import Footer from "./Footer";
// MaterialUI
import { Container } from "@material-ui/core";

export default function Layout(props) {

    console.log(props);

    return (
        <Container item>
            <Header title={'title'} ></Header>
            <Container>
                <>{props.children}</>
            </Container>
            <Footer></Footer>
        </Container>
    );
}