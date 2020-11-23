// 

// Patterns of different scale types (pattern property is an array of semitone value differences between notes of the scale)
export const scalePatterns = [
    { type: "Chromatic", pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { type: "Major", pattern: [2, 2, 1, 2, 2, 2, 1, 1] },
    { type: "Minor", pattern: [2, 1, 2, 2, 1, 2, 2] },
    { type: "Harm Min", pattern: [2, 1, 2, 2, 1, 3, 1] },
    { type: "Mel Min", pattern: [2, 1, 2, 2, 2, 2, 1] },
    { type: "Dor", pattern: [2, 1, 2, 2, 2, 1, 2] },
    { type: "Mixo", pattern: [2, 2, 1, 2, 2, 1, 2] },
    { type: "Ahava Raba", pattern: [3, 2, 2, 3, 2] },
    { type: "Altered", pattern: [1, 2, 1, 2, 2, 2, 2] },
    { type: "Lyd Dom", pattern: [2, 2, 2, 1, 2, 2, 1] },
    { type: "Locrian", pattern: [1, 2, 2, 1, 2, 2, 2] }
]

// Array of available instruments
export const instruments = [
    {
        instrumentName: "Piano",
        instrumentSounds: [
            { number: 0, intervalValue: "1", name: "C", sound: "/audio/piano/C2.mp3" },
            { number: 1, intervalValue: "b2", name: "C#", sound: "/audio/piano/Csharp2.mp3" },
            { number: 2, intervalValue: "2", name: "D", sound: "/audio/piano/D2.mp3" },
            { number: 3, intervalValue: "b3", name: "D#", sound: "/audio/piano/Dsharp2.mp3" },
            { number: 4, intervalValue: "3", name: "E", sound: "/audio/piano/E2.mp3" },
            { number: 5, intervalValue: "4", name: "F", sound: "/audio/piano/F2.mp3" },
            { number: 6, intervalValue: "#4/b5", name: "F#", sound: "/audio/piano/Fsharp2.mp3" },
            { number: 7, intervalValue: "5", name: "G", sound: "/audio/piano/G2.mp3" },
            { number: 8, intervalValue: "b6", name: "G#", sound: "/audio/piano/Gsharp2.mp3" },
            { number: 9, intervalValue: "6", name: "A", sound: "/audio/piano/A2.mp3" },
            { number: 10, intervalValue: "b7", name: "A#", sound: "/audio/piano/Asharp2.mp3" },
            { number: 11, intervalValue: "7", name: "B", sound: "/audio/piano/B2.mp3" },
            { number: 12, intervalValue: "8", name: "C", sound: "/audio/piano/C3.mp3" },
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

// export const cadenceTypes = [
//     { number: 0, name: "ii V I", sound: "/audio/piano/iiVI(C).mp3" },
//     { number: 1, name: "ii V7 i", sound: "/audio/piano/iiV7i(Cm).mp3" },
//     { number: 2, name: "ii V I", sound: "/audio/rhodes/iiVI(C).mp3" },
//     { number: 3, name: "ii V7 i", sound: "/audio/rhodes/iiV7i(Cm).mp3" }
// ]

export const cadencePatterns = [
    { type: "Major", pattern: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
    { type: "Minor", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] }
]

// ENUMS - to be included later

// export const ScaleTypes = Object.freeze({
//     // Scale pattern is sequence of difference in semitones between each note (first index is the second note)
//     MAJOR: {
//         TYPE: "Major",
//         SCALE_PATTERN: [2, 2, 1, 2, 2, 2, 1, 1]
//     },
//     MINOR: {
//         TYPE: "Minor",
//         PATTERN: [2, 1, 2, 2, 1, 2, 2]
//     }
// });

// export const CadenceTypes = Object.freeze({
//     // TO DO: Add in different voicings that will be chosen depending on the key
//     MAJOR: {
//         FOUR_FIVE_ONE: [[], [], []],
//         TWO_FIVE_ONE: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]],
//         SIX_TWO_FIVE_ONE: [[], [], [], []],
//         ONE_FOUR_SIX_FIVE_ONE: [[], [], [], []],
//         // e.g. G7, Db7, Cmaj7
//         TRITONE_SUBSTITUTION: [[], [], []],
//         // e.g. F-7 (IVm7), Bb7 (VII7), Cmaj7 (Imaj7)
//         BACKDOOR: [[], [], []],
//         // e.g. IV, I
//         PLAGAL: [[], [], []],
//     },
//     MINOR: {
//         // e.g. bII - I
//         PHRYGIAN: [[], []],
//         // e.g. vii˚7 - i
//         MINOR_TYPE_ONE: [[], []],
//         // e.g. bVII - i
//         AEOLIAN: [[], []],
//         // e.g. bvii6 - i 
//         PHRYGIAN: [[], []],
//         // e.g. iv - i
//         MINOR_TYPE_TWO: [[], []],
//         // e.g. IV - i
//         DORIAN: [[], []],
//         // e.g. iiø65 - i
//         MINOR_TYPE_THREE: [[], []],
//         // e.g. III6 - i
//         DOUBLE_CHROMATIC_MEDIANT: [[], []]
//     }
// });

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

// Creates an array of audio objects
export function getSoundObjects(noteArray) {
    return noteArray.map((item) => {
        return new Audio(item.sound);
    })
}