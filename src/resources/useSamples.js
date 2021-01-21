import { QueuePlayNextTwoTone } from '@material-ui/icons';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

// Takes a set of samples (currently the full array) & an audioContext
function useSamples(instruments, instrumentType, ctx) {
    const [samples, setSamples] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function playNote(number, result) {
        const note = result.find((note) => note.midiNumber === number);
        let bufferSource = ctx.createBufferSource();
        bufferSource.buffer = note.audioBuffer;
        bufferSource.connect(ctx.destination);
        bufferSource.start();
    }

    // Augments each note object in the instruments array by adding the audioBuffer property with each audioBuffer value
    const setupSamples = async (instruments) => {
        const instrument = instruments.find(instrument => instrument.instrumentName === instrumentType);
        const noteFilePaths = instrument.instrumentSounds.map(note => note.filePath);

        // https://stackoverflow.com/questions/54509959/how-do-i-play-audio-files-synchronously-in-javascript/54510663#54510663
        const audio = Promise.all(noteFilePaths.map(filePath =>
            fetch(filePath)
                .then(result => result.arrayBuffer())
                .then(buffer => ctx.decodeAudioData(buffer))
        ));

        await audio;

        instrument.instrumentSounds.forEach((note, i) => audio.then(buffers => note.audioBuffer = buffers[i]));
        return instrument.instrumentSounds;
    }

    useEffect(() => {
        setupSamples(instruments)
            .then(result => {
                setSamples(result);
            })
            .catch(err => {
                console.log('catch error: ', err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return [isLoading, samples];
}

export default useSamples;
