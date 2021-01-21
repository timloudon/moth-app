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
        console.log('note played in special place')
    }

    // Augments each note object in the instruments array by adding the audioBuffer property with each audioBuffer value
    const setupSamples = async (instruments) => {
        const instrument = instruments.find(instrument => instrument.instrumentName === instrumentType);
        const noteFilePaths = instrument.instrumentSounds.map(note => note.filePath);

        // https://stackoverflow.com/questions/54509959/how-do-i-play-audio-files-synchronously-in-javascript/54510663#54510663
        const audio = Promise.all(noteFilePaths.map(filePath =>
            fetch(filePath)
                .then(result => result.arrayBuffer())
                .then(buffer => {
                    const decodedBuffer = ctx.decodeAudioData(buffer);
                    console.log('decoded buffer; ', decodedBuffer);
                    return decodedBuffer;
                })
        ));

        await audio;

        instrument.instrumentSounds.forEach((note, i) => {
            audio.then(buffers => {
                note.audioBuffer = buffers[i];
                console.log('buffers: ', buffers);
            });
        });
        return instrument.instrumentSounds;
    }

    // https://stackoverflow.com/questions/63213549/warning-cant-perform-a-react-state-update-on-an-unmounted-component-in-a-func
    // const isMountedRef = useRef(true);
    // useEffect(() => () => { isMountedRef.current = false }, []);

    useEffect(() => {
        setupSamples(instruments)
            .then(result => {
                console.log('samples resolved');
                setSamples(result);
                // if (isMountedRef.current) {
                // }
            })
            // PROBLEM: the loading state is changing after the audio promise is resolved but before the buffers are processed
            // .then(() => setIsLoading(false))
            .catch(err => {
                console.log('catch error: ', err);
            })
            // isLoading not waiting for resolve of promises and decoding
            .finally(() => setIsLoading(false));
    }, []);

    return [isLoading, samples];
}

export default useSamples;
