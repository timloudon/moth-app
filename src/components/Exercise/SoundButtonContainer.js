import React from 'react';
// Components
import AppButton from "../../shared/AppButton";
import { instruments } from "../../shared/musicResources";

function SoundButtonContainer(props) {

    const { changeInstrumentSound } = props;

    return (
        instruments.map((item) => {
            console.log('item.instrumentName: ', item.instrumentName);
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
