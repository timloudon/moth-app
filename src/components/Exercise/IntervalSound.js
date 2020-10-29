import React from "react";

// This component maps out all the available sound files into audio elements within the DOM
function IntervalSound(props) {

    const { allNotes } = props;

    return (
        allNotes.map((item) => {
            return (
                <audio src={item.sound} id={item.number}></audio>
            );
        })
    );
}

export default IntervalSound;