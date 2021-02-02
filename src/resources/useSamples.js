import { useState, useEffect } from 'react';

// Takes a set of samples (currently the full array) & an audioContext
function useSamples(instrument, ctx) {
    const [isLoading, setIsLoading] = useState(true);

    // Augments each note object in the instruments array by adding the audioBuffer property with each audioBuffer value
    const setupSamples = async (instrument) => {
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
        setupSamples(instrument)
            .then()
            .catch(err => console.log('catch error: ', err))
            .finally(() => setIsLoading(false));
    }, []);

    return [isLoading];
}

export default useSamples;
