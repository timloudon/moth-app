// Patterns of different scale types (pattern property is an array of semitone value differences between notes of the scale)
export const scalePatterns = [
    { scaleType: "Maj", pattern: [2, 2, 1, 2, 2, 2, 1, 1] },
    { scaleType: "Min", pattern: [2, 1, 2, 2, 1, 2, 2] },
    { scaleType: "Harm Min", pattern: [2, 1, 2, 2, 1, 3, 1] },
    { scaleType: "Mel Min", pattern: [2, 1, 2, 2, 2, 2, 1] },
    { scaleType: "Dor", pattern: [2, 1, 2, 2, 2, 1, 2] },
    { scaleType: "Mixo", pattern: [2, 2, 1, 2, 2, 1, 2] },
    { scaleType: "Ahava Raba", pattern: [3, 2, 2, 3, 2] },
    { scaleType: "Altered", pattern: [1, 2, 1, 2, 2, 2, 2] },
    { scaleType: "Lyd Dom", pattern: [2, 2, 2, 1, 2, 2, 1] },
    { scaleType: "Locrian", pattern: [1, 2, 2, 1, 2, 2, 2] }
]

// export const scalePatternsEnum = {
//     major: scalePatterns[0].pattern,
// }

// Array of available instruments
export const instruments = [
    {
        instrumentName: "Piano",
        instrumentSounds: [
            { number: 0, name: "C", sound: "/audio/piano/C2.mp3" },
            { number: 1, name: "C#", sound: "/audio/piano/Csharp2.mp3" },
            { number: 2, name: "D", sound: "/audio/piano/D2.mp3" },
            { number: 3, name: "D#", sound: "/audio/piano/Dsharp2.mp3" },
            { number: 4, name: "E", sound: "/audio/piano/E2.mp3" },
            { number: 5, name: "F", sound: "/audio/piano/F2.mp3" },
            { number: 6, name: "F#", sound: "/audio/piano/Fsharp2.mp3" },
            { number: 7, name: "G", sound: "/audio/piano/G2.mp3" },
            { number: 8, name: "G#", sound: "/audio/piano/Gsharp2.mp3" },
            { number: 9, name: "A", sound: "/audio/piano/A2.mp3" },
            { number: 10, name: "A#", sound: "/audio/piano/Asharp2.mp3" },
            { number: 11, name: "B", sound: "/audio/piano/B2.mp3" },
            { number: 12, name: "C", sound: "/audio/piano/C3.mp3" },
        ]
    },
    {
        instrumentName: "Rhodes",
        instrumentSounds: [
            { number: 0, name: "C", sound: "/audio/rhodes/C3.mp3" },
            { number: 1, name: "C#", sound: "/audio/rhodes/Csharp3.mp3" },
            { number: 2, name: "D", sound: "/audio/rhodes/D3.mp3" },
            { number: 3, name: "D#", sound: "/audio/rhodes/Dsharp3.mp3" },
            { number: 4, name: "E", sound: "/audio/rhodes/E3.mp3" },
            { number: 5, name: "F", sound: "/audio/rhodes/F3.mp3" },
            { number: 6, name: "F#", sound: "/audio/rhodes/Fsharp3.mp3" },
            { number: 7, name: "G", sound: "/audio/rhodes/G3.mp3" },
            { number: 8, name: "G#", sound: "/audio/rhodes/Gsharp3.mp3" },
            { number: 9, name: "A", sound: "/audio/rhodes/A3.mp3" },
            { number: 10, name: "A#", sound: "/audio/rhodes/Asharp3.mp3" },
            { number: 11, name: "B", sound: "/audio/rhodes/B3.mp3" },
            { number: 12, name: "C", sound: "/audio/rhodes/C4.mp3" },
        ]
    }
]

// Provides the key values for keys A, S, D, F, G, H, J, K
export const keyboardKeyValues = [65, 83, 68, 70, 71, 72, 74, 75];

// Gets the notes that match the scale pattern from all available notes
export function getScaleKeys(scalePattern, notes) {
    // Convert scale pattern into index values
    let indexArray = [0];
    scalePattern.reduce((accumulator, currentValue) => {
        indexArray.push(accumulator + currentValue);
        return accumulator + currentValue;
    }, 0)
    // filter notes where element exists in scale pattern index array
    const scaleKeys = notes.filter((note) => indexArray.includes(note.number));
    return scaleKeys;
}

// Matches the button with the keydown value and clicks the button
export function playSoundWithKeys(e) {
    const scaleButton = document.querySelector(`button.key[data-key="${e.keyCode}"]`);
    if (!scaleButton) return;
    scaleButton.click();
}