import React from "react";
// MaterialUI
import { Button } from "@material-ui/core";

function IntervalButton(props) {

    const { number, dataKey, mykey, onClickHandler } = props;

    return (
        <>
            <Button
                variant="contained"
                data-key={dataKey}
                className="key"
                data-mykey={mykey}
                onClick={onClickHandler}>
                {number}
            </Button>
        </>
    );
}

export default IntervalButton;