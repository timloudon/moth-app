import { useState, useEffect } from 'react';

// Takes a set of samples (currently the full array) & an audioContext
function useSamples(instruments, instrumentType, ctx) {
    const [samples, setSamples] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Fetch audio file and decode the audio for use
    const getFile = async (audioContext, filePath) => {
        const resultponse = await fetch(filePath);
        const arrayBuffer = await resultponse.arrayBuffer();
        const decodedAudio = await audioContext.decodeAudioData(arrayBuffer);
        return decodedAudio;
    }

    // Augments each note object in the instruments array by adding the audioBuffer property with each audioBBuffer value
    const setupSamples = async (instruments) => {
        const instrument = await instruments.find(instrument => instrument.instrumentName === instrumentType);
        instrument.instrumentSounds.forEach(async note => {
            note.audioBuffer = await getFile(ctx, note.filePath);
        });
        return instrument.instrumentSounds;
    }

    useEffect(() => {
        setupSamples(instruments)
            .then(result => {
                // remove timeout after completing funcitonality
                setTimeout(() => {
                    setSamples(result);
                    console.log('samples loaded');
                    setIsLoading(false);
                }, 0);
            })
            .catch(err => {
                console.log('error: ', err.value);
            })
    }, [isLoading]);

    return [isLoading, samples];
}

export default useSamples;
