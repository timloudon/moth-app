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
            { midiNumber: 36, sound: "/audio/piano/36.wav" },
            { midiNumber: 37, sound: "/audio/piano/37.wav" },
            { midiNumber: 38, sound: "/audio/piano/38.wav" },
            { midiNumber: 39, sound: "/audio/piano/39.wav" },
            { midiNumber: 40, sound: "/audio/piano/40.wav" },
            { midiNumber: 41, sound: "/audio/piano/41.wav" },
            { midiNumber: 42, sound: "/audio/piano/42.wav" },
            { midiNumber: 43, sound: "/audio/piano/43.wav" },
            { midiNumber: 44, sound: "/audio/piano/44.wav" },
            { midiNumber: 45, sound: "/audio/piano/45.wav" },
            { midiNumber: 46, sound: "/audio/piano/46.wav" },
            { midiNumber: 47, sound: "/audio/piano/47.wav" },
            { midiNumber: 48, sound: "/audio/piano/48.wav" },
            { midiNumber: 49, sound: "/audio/piano/49.wav" },
            { midiNumber: 50, sound: "/audio/piano/50.wav" },
            { midiNumber: 51, sound: "/audio/piano/51.wav" },
            { midiNumber: 52, sound: "/audio/piano/52.wav" },
            { midiNumber: 53, sound: "/audio/piano/53.wav" },
            { midiNumber: 54, sound: "/audio/piano/54.wav" },
            { midiNumber: 55, sound: "/audio/piano/55.wav" },
            { midiNumber: 56, sound: "/audio/piano/56.wav" },
            { midiNumber: 57, sound: "/audio/piano/57.wav" },
            { midiNumber: 58, sound: "/audio/piano/58.wav" },
            { midiNumber: 59, sound: "/audio/piano/59.wav" },
            { midiNumber: 60, sound: "/audio/piano/60.wav" },
            { midiNumber: 61, sound: "/audio/piano/61.wav" },
            { midiNumber: 62, sound: "/audio/piano/62.wav" },
            { midiNumber: 63, sound: "/audio/piano/63.wav" },
            { midiNumber: 64, sound: "/audio/piano/64.wav" },
            { midiNumber: 65, sound: "/audio/piano/65.wav" },
            { midiNumber: 66, sound: "/audio/piano/66.wav" },
            { midiNumber: 67, sound: "/audio/piano/67.wav" },
            { midiNumber: 68, sound: "/audio/piano/68.wav" },
            { midiNumber: 69, sound: "/audio/piano/69.wav" },
            { midiNumber: 70, sound: "/audio/piano/70.wav" },
            { midiNumber: 71, sound: "/audio/piano/71.wav" },
            { midiNumber: 72, sound: "/audio/piano/72.wav" },
            { midiNumber: 73, sound: "/audio/piano/73.wav" },
            { midiNumber: 74, sound: "/audio/piano/74.wav" },
            { midiNumber: 75, sound: "/audio/piano/75.wav" },
            { midiNumber: 76, sound: "/audio/piano/76.wav" },
            { midiNumber: 77, sound: "/audio/piano/77.wav" },
            { midiNumber: 78, sound: "/audio/piano/78.wav" },
            { midiNumber: 79, sound: "/audio/piano/79.wav" },
            { midiNumber: 80, sound: "/audio/piano/80.wav" },
            { midiNumber: 81, sound: "/audio/piano/81.wav" },
            { midiNumber: 82, sound: "/audio/piano/82.wav" },
            { midiNumber: 83, sound: "/audio/piano/83.wav" },
            { midiNumber: 84, sound: "/audio/piano/84.wav" },
            { midiNumber: 85, sound: "/audio/piano/85.wav" },
            { midiNumber: 86, sound: "/audio/piano/86.wav" },
            { midiNumber: 87, sound: "/audio/piano/87.wav" },
            { midiNumber: 88, sound: "/audio/piano/88.wav" },
            { midiNumber: 89, sound: "/audio/piano/89.wav" },
            { midiNumber: 90, sound: "/audio/piano/90.wav" },
            { midiNumber: 91, sound: "/audio/piano/91.wav" },
            { midiNumber: 92, sound: "/audio/piano/92.wav" },
            { midiNumber: 93, sound: "/audio/piano/93.wav" },
            { midiNumber: 94, sound: "/audio/piano/94.wav" },
            { midiNumber: 95, sound: "/audio/piano/95.wav" },
            { midiNumber: 96, sound: "/audio/piano/96.wav" },
            { midiNumber: 97, sound: "/audio/piano/97.wav" },
            { midiNumber: 98, sound: "/audio/piano/98.wav" },
            { midiNumber: 99, sound: "/audio/piano/99.wav" },
            { midiNumber: 100, sound: "/audio/piano/100.wav" },
            { midiNumber: 101, sound: "/audio/piano/101.wav" },
            { midiNumber: 102, sound: "/audio/piano/102.wav" },
            { midiNumber: 103, sound: "/audio/piano/103.wav" },
            { midiNumber: 104, sound: "/audio/piano/104.wav" },
            { midiNumber: 105, sound: "/audio/piano/105.wav" }
        ]
    },
    {
        instrumentName: "Rhodes",
        instrumentSounds: [
            { midiNumber: 36, sound: "/audio/rhodes/36.wav" },
            { midiNumber: 37, sound: "/audio/rhodes/37.wav" },
            { midiNumber: 38, sound: "/audio/rhodes/38.wav" },
            { midiNumber: 39, sound: "/audio/rhodes/39.wav" },
            { midiNumber: 40, sound: "/audio/rhodes/40.wav" },
            { midiNumber: 41, sound: "/audio/rhodes/41.wav" },
            { midiNumber: 42, sound: "/audio/rhodes/42.wav" },
            { midiNumber: 43, sound: "/audio/rhodes/43.wav" },
            { midiNumber: 44, sound: "/audio/rhodes/44.wav" },
            { midiNumber: 45, sound: "/audio/rhodes/45.wav" },
            { midiNumber: 46, sound: "/audio/rhodes/46.wav" },
            { midiNumber: 47, sound: "/audio/rhodes/47.wav" },
            { midiNumber: 48, sound: "/audio/rhodes/48.wav" },
            { midiNumber: 49, sound: "/audio/rhodes/49.wav" },
            { midiNumber: 50, sound: "/audio/rhodes/50.wav" },
            { midiNumber: 51, sound: "/audio/rhodes/51.wav" },
            { midiNumber: 52, sound: "/audio/rhodes/52.wav" },
            { midiNumber: 53, sound: "/audio/rhodes/53.wav" },
            { midiNumber: 54, sound: "/audio/rhodes/54.wav" },
            { midiNumber: 55, sound: "/audio/rhodes/55.wav" },
            { midiNumber: 56, sound: "/audio/rhodes/56.wav" },
            { midiNumber: 57, sound: "/audio/rhodes/57.wav" },
            { midiNumber: 58, sound: "/audio/rhodes/58.wav" },
            { midiNumber: 59, sound: "/audio/rhodes/59.wav" },
            { midiNumber: 60, sound: "/audio/rhodes/60.wav" },
            { midiNumber: 61, sound: "/audio/rhodes/61.wav" },
            { midiNumber: 62, sound: "/audio/rhodes/62.wav" },
            { midiNumber: 63, sound: "/audio/rhodes/63.wav" },
            { midiNumber: 64, sound: "/audio/rhodes/64.wav" },
            { midiNumber: 65, sound: "/audio/rhodes/65.wav" },
            { midiNumber: 66, sound: "/audio/rhodes/66.wav" },
            { midiNumber: 67, sound: "/audio/rhodes/67.wav" },
            { midiNumber: 68, sound: "/audio/rhodes/68.wav" },
            { midiNumber: 69, sound: "/audio/rhodes/69.wav" },
            { midiNumber: 70, sound: "/audio/rhodes/70.wav" },
            { midiNumber: 71, sound: "/audio/rhodes/71.wav" },
            { midiNumber: 72, sound: "/audio/rhodes/72.wav" },
            { midiNumber: 73, sound: "/audio/rhodes/73.wav" },
            { midiNumber: 74, sound: "/audio/rhodes/74.wav" },
            { midiNumber: 75, sound: "/audio/rhodes/75.wav" },
            { midiNumber: 76, sound: "/audio/rhodes/76.wav" },
            { midiNumber: 77, sound: "/audio/rhodes/77.wav" },
            { midiNumber: 78, sound: "/audio/rhodes/78.wav" },
            { midiNumber: 79, sound: "/audio/rhodes/79.wav" },
            { midiNumber: 80, sound: "/audio/rhodes/80.wav" },
            { midiNumber: 81, sound: "/audio/rhodes/81.wav" },
            { midiNumber: 82, sound: "/audio/rhodes/82.wav" },
            { midiNumber: 83, sound: "/audio/rhodes/83.wav" },
            { midiNumber: 84, sound: "/audio/rhodes/84.wav" },
            { midiNumber: 85, sound: "/audio/rhodes/85.wav" },
            { midiNumber: 86, sound: "/audio/rhodes/86.wav" },
            { midiNumber: 87, sound: "/audio/rhodes/87.wav" },
            { midiNumber: 88, sound: "/audio/rhodes/88.wav" },
            { midiNumber: 89, sound: "/audio/rhodes/89.wav" },
            { midiNumber: 90, sound: "/audio/rhodes/90.wav" },
            { midiNumber: 91, sound: "/audio/rhodes/91.wav" },
            { midiNumber: 92, sound: "/audio/rhodes/92.wav" },
            { midiNumber: 93, sound: "/audio/rhodes/93.wav" },
            { midiNumber: 94, sound: "/audio/rhodes/94.wav" },
            { midiNumber: 95, sound: "/audio/rhodes/95.wav" },
            { midiNumber: 96, sound: "/audio/rhodes/96.wav" },
            { midiNumber: 97, sound: "/audio/rhodes/97.wav" },
            { midiNumber: 98, sound: "/audio/rhodes/98.wav" },
            { midiNumber: 99, sound: "/audio/rhodes/99.wav" },
            { midiNumber: 100, sound: "/audio/rhodes/100.wav" },
            { midiNumber: 101, sound: "/audio/rhodes/101.wav" },
            { midiNumber: 102, sound: "/audio/rhodes/102.wav" },
            { midiNumber: 103, sound: "/audio/rhodes/103.wav" },
            { midiNumber: 104, sound: "/audio/rhodes/104.wav" },
            { midiNumber: 105, sound: "/audio/rhodes/105.wav" }
        ]
    }
]

// Array of old style available instruments
export const oldInstruments = [
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
    { type: "Minor", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] },
    { type: "Major Chromatic", pattern: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
    { type: "Minor Chromatic", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] }
]

// Test to use MIDI notes to determine cadences
export const midiCadencePatterns = [
    { type: "Major", pattern: [[63, 65, 69, 72], [63, 65, 67, 71], [60, 64, 67, 71]] }
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
    // console.log('GET SOUNDS');
    return noteArray.map((item) => {
        // console.log('LOAD SOUND');
        const audio = new Audio(item.sound);
        //audio.load();
        return audio;
    })
}