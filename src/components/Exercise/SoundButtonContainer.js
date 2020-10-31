import React from 'react';
// Components
import AppButton from "../../shared/AppButton";
import { instruments } from "../../shared/scales";

function SoundButtonContainer(props) {

    const { changeInstrumentSound } = props;

    return (
        instruments.map((item) => {
            return (
                <AppButton
                    key={item.instrumentName}
                    buttonText={item.instrumentName}
                    onClickHandler={() => { changeInstrumentSound(item.instrumentSounds) }} />
            )
        })
    )
}

export default SoundButtonContainer
