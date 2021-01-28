import React, { useState } from 'react';
import useSamples from '../../resources/useSamples';
import Exercise from './Exercise';
import SpinnerLogo from '../common/SpinnerLogo';
import { allNoteNames, keyMaps } from "../../resources/musicResources";
// import { getScaleNotes, getScalesOfKeySignatures } from '../../resources/helperFunctions';

function SamplesProvider({ routeProps, instrumentType, ctx }) {
    class Note {
        constructor(midiNumber, filePath) {
            this.midiNumber = midiNumber;
            switch (true) {
                case (midiNumber >= 36 && midiNumber <= 47):
                    this.midiOctave = 2;
                    break;
                case (midiNumber >= 48 && midiNumber <= 59):
                    this.midiOctave = 3;
                    break;
                case (midiNumber >= 60 && midiNumber <= 71):
                    this.midiOctave = 4;
                    break;
                case (midiNumber >= 72 && midiNumber <= 83):
                    this.midiOctave = 5;
                    break;
                case (midiNumber >= 84 && midiNumber <= 95):
                    this.midiOctave = 6;
                    break;
                case (midiNumber >= 96 && midiNumber <= 103):
                    this.midiOctave = 7;
            }
            switch (true) {
                case (midiNumber === 36 || !(midiNumber % 12)):
                    this.noteName = ["C"];
                    break;
                case (!((midiNumber - 1) % (12))):
                    this.noteName = ["C#", "Db"];
                    break;
                case (!((midiNumber - 2) % (12))):
                    this.noteName = ["D"];
                    break;
                case (!((midiNumber - 3) % (12))):
                    this.noteName = ["D#", "Eb"];
                    break;
                case (!((midiNumber - 4) % (12))):
                    this.noteName = ["E"];
                    break;
                case (!((midiNumber - 5) % (12))):
                    this.noteName = ["E#", "F"];
                    break;
                case (!((midiNumber - 6) % (12))):
                    this.noteName = ["F#", "Gb"];
                    break;
                case (!((midiNumber - 7) % (12))):
                    this.noteName = ["G"];
                    break;
                case (!((midiNumber - 8) % (12))):
                    this.noteName = ["G#", "Ab"];
                    break;
                case (!((midiNumber - 9) % (12))):
                    this.noteName = ["A"];
                    break;
                case (!((midiNumber - 10) % (12))):
                    this.noteName = ["A#", "Bb"];
                    break;
                case (!((midiNumber - 11) % (12))):
                    this.noteName = ["B", "Cb"];
                    break;
            }
            this.filePath = filePath;
        }
    }

    class Instrument {
        constructor(instrumentType, rangeOfNotes) {
            this.instrumentName = instrumentType;
            this.instrumentSounds = new Array(rangeOfNotes[1] - rangeOfNotes[0] + 1)
                .fill()
                .map((_, i) => new Note(rangeOfNotes[0] + i, `/audio/${instrumentType.toLowerCase()}/${rangeOfNotes[0] + i}.m4a`));
        }
    }

    const scaleType = routeProps.location.state.scale.type;

    const getScalesOfKeySignatures = (scaleType, questionKeySignatures) => {
        const getTonality = keyMaps.find(keyType => keyType.tonality === scaleType);
        const getKeys = getTonality.keys.filter(key => questionKeySignatures.includes(key.keyName));
        getKeys.forEach((key) => {
            key.unsortedScale = key.noteNameIndexMap.map((val) => allNoteNames[val]);
            key.tonicIndex = key.unsortedScale.findIndex((el) => el === key.keyName);
            key.scale = key.unsortedScale.splice(key.tonicIndex).concat(key.unsortedScale);
            // Not sure whether to use this as I may want to loop over multiple octaves:
            // key.scale.push(key.scale[0]);
            delete key.unsortedScale;
            delete key.tonicIndex;
        });
        return getKeys;
    }

    // Options states:
    // - samplesNoteRange: needs to be the maximum depending on the range of question notes and therefor cadences
    // - questionNoteRange: the range of questions (default is one octave)
    // - instrumentSound: the specific samples that are used for the exercise
    // - exerciseKeys: the selected keys for practice

    const [samplesNoteRange, setNoteRange] = useState([42, 84]);
    const [questionsNoteRange, setQuestionsNoteRange] = useState([60, 72]);
    const [questionKeySignatures, setQuestionKeySignatures] = useState(["F#", "Gb", "D", "C", "Eb"])
    const [instrument, setInstrument] = useState(new Instrument(instrumentType, samplesNoteRange));
    const [isLoading] = useSamples(instrument, ctx);
    const [exerciseKeys, setKeys] = useState(getScalesOfKeySignatures(scaleType, questionKeySignatures));

    return (
        <>
            {isLoading
                ? <SpinnerLogo isLoading={isLoading} />
                : (<Exercise
                    routeProps={routeProps}
                    ctx={ctx}
                    instrument={instrument}
                    instrumentType={instrumentType}
                    questionsNoteRange={questionsNoteRange}
                    exerciseKeys={exerciseKeys}
                    isLoading={isLoading}
                />)
            }
        </>
    )
}

export default SamplesProvider
