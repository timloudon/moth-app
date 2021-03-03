// Need to rewrite cadence patterns with values relative from root notes:
export const instruments = ["Piano", "Rhodes"]

export const cadencePatterns = [
    { type: "Major", symbols: "ii - V - I", pattern: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
    { type: "Minor", symbols: "ii - V - I", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] },
    { type: "Plagal", symbols: "I - IV - I", pattern: [[], [], []] },
    { type: "Minor Plagal", symbols: "IV - iv - I", pattern: [[], [], []] },
    { type: "Backdoor", symbols: "iv-7 - bVII7 - I", pattern: [[-19, -4, 0, 3], [-14, -4, 0, 2, 5], [-12, -1, 2, 4, 7]] },
    { type: "Tritone", symbols: "ii - bii7 - I", pattern: [[-5, 5, 11], [-11, 5, 11], [-12, 4, 12]] },
    { type: "6251", symbols: "vi - ii - V - I", pattern: [[], [2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
    { type: "1564", symbols: "I - V - vi - IV", pattern: [[], [], [], []] },
    { type: "Half", symbols: "IV - ii - V", pattern: [[], [], []] },
]

export const scalePatterns = [
    { type: "Chromatic", pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { type: "Major", pattern: [2, 2, 1, 2, 2, 2, 1] },
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

export const allNoteNames = ["C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "Cb"];
export const allScaleTones = ["1", "b2", "2", "b3", "3", "4", "#4", "b5", "5", "b6", "6", "b7", "7", "8"];

export const keyMaps = [
    {
        tonality: "Major",
        scaleTonesIndexMap: [0, 2, 4, 5, 8, 10, 12, 13],
        keys: [
            { keyName: "C", noteNameIndexMap: [0, 3, 6, 8, 11, 14, 17] },
            { keyName: "Db", noteNameIndexMap: [0, 2, 5, 8, 10, 13, 16] },
            { keyName: "D", noteNameIndexMap: [1, 3, 6, 9, 11, 14, 17] },
            { keyName: "Eb", noteNameIndexMap: [0, 3, 5, 8, 11, 13, 16] },
            { keyName: "E", noteNameIndexMap: [1, 4, 6, 9, 12, 14, 17] },
            { keyName: "F", noteNameIndexMap: [0, 3, 6, 8, 11, 14, 16] },
            { keyName: "F#", noteNameIndexMap: [1, 4, 7, 9, 12, 15, 17] },
            { keyName: "Gb", noteNameIndexMap: [2, 5, 8, 10, 13, 16, 18] },
            { keyName: "G", noteNameIndexMap: [0, 3, 6, 9, 11, 14, 17] },
            { keyName: "Ab", noteNameIndexMap: [0, 2, 5, 8, 11, 13, 16] },
            { keyName: "A", noteNameIndexMap: [1, 3, 6, 9, 12, 14, 17] },
            { keyName: "Bb", noteNameIndexMap: [0, 3, 5, 8, 11, 14, 16] },
            { keyName: "B", noteNameIndexMap: [1, 4, 6, 9, 12, 16, 17] },
        ]
    },
    {
        tonality: "Minor",
        scaleTonesIndexMap: [0, 2, 3, 5, 8, 9, 11, 13],
        keys: [
            { keyName: "Eb", relativeMinor: "Cm", noteNameIndexMap: [0, 3, 5, 8, 11, 13, 16] },
            { keyName: "E", relativeMinor: "C#m", noteNameIndexMap: [1, 4, 6, 9, 12, 14, 17] },
            { keyName: "F", relativeMinor: "Dm", noteNameIndexMap: [0, 3, 6, 8, 11, 14, 16] },
            { keyName: "F#", relativeMinor: "D#m", noteNameIndexMap: [1, 4, 7, 9, 12, 15, 17] },
            { keyName: "G", relativeMinor: "Em", noteNameIndexMap: [0, 3, 6, 9, 11, 14, 17] },
            { keyName: "Ab", relativeMinor: "Fm", noteNameIndexMap: [0, 2, 5, 8, 11, 13, 16] },
            { keyName: "A", relativeMinor: "F#m", noteNameIndexMap: [1, 3, 6, 9, 12, 14, 17] },
            { keyName: "Bb", relativeMinor: "Gm", noteNameIndexMap: [0, 3, 5, 8, 11, 14, 16] },
            { keyName: "B", relativeMinor: "G#m", noteNameIndexMap: [1, 4, 6, 9, 12, 16, 17] },
            { keyName: "C", relativeMinor: "Am", noteNameIndexMap: [0, 3, 6, 8, 11, 14, 17] },
            { keyName: "Db", relativeMinor: "Bbm", noteNameIndexMap: [0, 2, 5, 8, 10, 13, 16] },
            { keyName: "D", relativeMinor: "Bm", noteNameIndexMap: [1, 3, 6, 9, 11, 14, 16] },
        ]
    },
    {
        tonality: "Chromatic",
        scaleTonesIndexMap: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13],
        keys: [
            { keyName: "Eb", relativeMinor: "Cm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
            { keyName: "E", relativeMinor: "C#m", noteNameIndexMap: [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17] },
            { keyName: "F", relativeMinor: "Dm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
            { keyName: "F#", relativeMinor: "D#m", noteNameIndexMap: [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17] },
            { keyName: "Gb", relativeMinor: "Ebm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
            { keyName: "G", relativeMinor: "Em", noteNameIndexMap: [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17] },
            { keyName: "Ab", relativeMinor: "Fm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
            { keyName: "A", relativeMinor: "F#m", noteNameIndexMap: [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17] },
            { keyName: "Bb", relativeMinor: "Gm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
            { keyName: "B", relativeMinor: "G#m", noteNameIndexMap: [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17] },
            { keyName: "C", relativeMinor: "Am", noteNameIndexMap: [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17] },
            { keyName: "Db", relativeMinor: "Bbm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
            { keyName: "D", relativeMinor: "Bm", noteNameIndexMap: [0, 2, 3, 5, 6, 8, 10, 11, 13, 14, 16, 17] },
        ]
    }
]
