import React from 'react';
// Components
import AppButton from "../common/AppButton";
import { instruments } from "../../resources/musicResources";

function SoundButtonContainer({ changeInstrumentSound }) {
    return (
        instruments.map((item) => {
            return (
                <AppButton
                    key={item.instrumentName}
                    buttonText={item.instrumentName}
                    onClickHandler={() => { changeInstrumentSound(item.instrumentName) }} />
            )
        })
    )
}

export default SoundButtonContainer
