export const scalePatterns = [
    { scaleType: "Maj", pattern: [2, 2, 1, 2, 2, 2, 1, 1] },
    { scaleType: "Min", pattern: [2, 1, 2, 2, 1, 2, 2] },
    { scaleType: "Harm Min", pattern: [2, 1, 2, 2, 1, 3, 1] },
    { scaleType: "Mel Min", pattern: [2, 1, 2, 2, 2, 2, 1] },
    { scaleType: "Dor", pattern: [2, 1, 2, 2, 2, 1, 2] },
    { scaleType: "Mixo", pattern: [2, 2, 1, 2, 2, 1, 2] },
    { scaleType: "Ahava Raba", pattern: [3, 2, 2, 3, 2] },
    { scaleType: "Altered", pattern: [1, 2, 1, 2, 2, 2, 2] },
    { scaleType: "Lyd Dom", pattern: [2, 2, 2, 1, 2, 2, 1] }
]

export const scalePatternsEnum = {
    major: scalePatterns[0].pattern,
}

export const pianoKeys = [
    { number: 0, name: "C2", sound: "/audio/piano/C2.mp3" },
    { number: 1, name: "C#", sound: "/audio/piano/Csharp2.mp3" },
    { number: 2, name: "D2", sound: "/audio/piano/D2.mp3" },
    { number: 3, name: "D#", sound: "/audio/piano/Dsharp2.mp3" },
    { number: 4, name: "E2", sound: "/audio/piano/E2.mp3" },
    { number: 5, name: "F2", sound: "/audio/piano/F2.mp3" },
    { number: 6, name: "F#", sound: "/audio/piano/Fsharp2.mp3" },
    { number: 7, name: "G2", sound: "/audio/piano/G2.mp3" },
    { number: 8, name: "G#", sound: "/audio/piano/Gsharp2.mp3" },
    { number: 9, name: "A2", sound: "/audio/piano/A2.mp3" },
    { number: 10, name: "A#", sound: "/audio/piano/Asharp2.mp3" },
    { number: 11, name: "B2", sound: "/audio/piano/B2.mp3" },
    { number: 12, name: "C3", sound: "/audio/piano/C3.mp3" },
]

export const keyboardKeyValues = [65, 83, 68, 70, 71, 72, 74, 75];

export function getScaleKeys(scales, keyboard) {
    // Convert scale pattern into index values
    let indexArray = [0];
    scales.reduce((accumulator, currentValue) => {
        indexArray.push(accumulator + currentValue);
        return accumulator + currentValue;
    }, 0)
    // filter piano keys where element exists in scale pattern index array
    const scaleKeys = keyboard.filter((pianoKey) => indexArray.includes(pianoKey.number));
    return scaleKeys;
}

export function playSoundWithKeys(e) {
    const scaleButton = document.querySelector(`button.key[data-key="${e.keyCode}"]`);
    if (!scaleButton) return;
    scaleButton.click();
}