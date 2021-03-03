import React from "react";
import Header from "../../components/common/Header";

export default function Layout(props) {

    const { title, page } = props;

    return (
        <>
            <Header title={title} page={page} />
            {props.children}
        </>
    );
}