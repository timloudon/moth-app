export const scalePatterns = [
    { scaleType: "Major", pattern: [2, 2, 1, 2, 2, 2, 1, 1] },
    { scaleType: "Natural Minor", pattern: [2, 1, 2, 2, 1, 2, 2] },
    { scaleType: "Harmonic Minor", pattern: [2, 1, 2, 2, 1, 3, 1] },
    { scaleType: "Melodic Minor", pattern: [2, 1, 2, 2, 2, 2, 1] },
    { scaleType: "Dorian Mode", pattern: [2, 1, 2, 2, 2, 1, 2] },
    { scaleType: "Mixolydian", pattern: [2, 2, 1, 2, 2, 1, 2] },
    { scaleType: "Ahava Raba", pattern: [3, 2, 2, 3, 2] }
]

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
    // { number: 29, name: "Csharp3/Db3", sound: "" },
    // { number: 30, name: "D3", sound: "" },
    // { number: 31, name: "Dsharp3/Eb3", sound: "" },
    // { number: 32, name: "E3", sound: "" },
    // { number: 33, name: "F3", sound: "" },
    // { number: 34, name: "Fsharp3/Gb3", sound: "" },
    // { number: 35, name: "G3", sound: "" },
    // { number: 36, name: "Gsharp3/Ab3", sound: "" },
    // { number: 37, name: "A3", sound: "" },
    // { number: 38, name: "Asharp3/Bb3", sound: "" },
    // { number: 39, name: "B3", sound: "" },
    // { number: 40, name: "C4", sound: "" },
    // { number: 41, name: "Csharp4/Db4", sound: "" },
    // { number: 42, name: "D4", sound: "" },
    // { number: 43, name: "Dsharp4/Eb4", sound: "" },
    // { number: 44, name: "E4", sound: "" },
    // { number: 45, name: "F4", sound: "" },
    // { number: 46, name: "Fsharp4/Gb4", sound: "" },
    // { number: 47, name: "G4", sound: "" },
    // { number: 48, name: "Gsharp4/Ab4", sound: "" },
    // { number: 49, name: "A4", sound: "" },
    // { number: 50, name: "Asharp4/Bb4", sound: "" },
    // { number: 51, name: "B4", sound: "" },
    // { number: 52, name: "C5", sound: "" },
    // { number: 53, name: "Csharp5/Db5", sound: "" },
    // { number: 54, name: "D5", sound: "" },
    // { number: 55, name: "Dsharp5/Eb5", sound: "" },
    // { number: 56, name: "E5", sound: "" },
    // { number: 57, name: "F5", sound: "" },
    // { number: 58, name: "Fsharp5/Gb5", sound: "" },
    // { number: 59, name: "G5", sound: "" },
    // { number: 60, name: "Gsharp5/Ab5", sound: "" },
    // { number: 61, name: "A5", sound: "" },
    // { number: 62, name: "Asharp5/Bb5", sound: "" },
    // { number: 63, name: "B5", sound: "" },
    // { number: 64, name: "C6", sound: "" }
]

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