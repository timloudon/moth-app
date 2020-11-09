import React from "react";
// MaterialUI
import { Button } from "@material-ui/core";

function IntervalButton(props) {

    const { intervalValue, dataKey, mykey, onClickHandler } = props;

    return (
        <>
            <Button
                variant="contained"
                style={{ textTransform: 'lowercase' }}
                data-key={dataKey}
                className="key"
                data-mykey={mykey}
                onClick={onClickHandler}>
                {intervalValue}
            </Button>
        </>
    );
}

export default IntervalButton;