// Need to rewrite cadence patterns with values relative from root notes:
export const cadencePatterns = [
    { type: "Major", pattern: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
    { type: "Minor", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] },
    { type: "Major Chromatic", pattern: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
    { type: "Minor Chromatic", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] }
]

// export const cadencePatterns = [
//     { type: "Major", pattern: [[62, 65, 69, 72], [62, 65, 67, 71], [60, 64, 67, 71]] },
//     { type: "Minor", pattern: [[62, 65, 68, 72], [62, 65, 67, 71], [60, 63, 67, 72]] },
//     { type: "Major Chromatic", pattern: [[2, 5, 9, 12], [2, 5, 7, 11], [0, 4, 7, 11]] },
//     { type: "Minor Chromatic", pattern: [[2, 5, 8, 12], [2, 5, 7, 11], [0, 3, 7, 12]] }
// ]

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

export const keyMaps = [
    {
        tonality: "Major",
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
    // const allNoteNames = [0"C", 1"C#", 2"Db", 3"D", 4"D#", 5"Eb", 6"E", 7"E#", 8"F", 9"F#", 
    //                     10"Gb", 11"G", 12"G#", 13"Ab", 14"A", 15"A#", 16"Bb", 17"B", 18"Cb"];

    // Am Em Bm F#m C#m
    // Dm Gm Cm Fm
    // Bb/A#m Eb/D#m Ab/G#m
    {
        tonality: "Minor",
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
    }
]

// depreciated:
export const instruments = [
    {
        instrumentName: "Piano",
        instrumentSounds: [
            { midiNumber: 36, midiOctave: "2", noteName: "C", filePath: "/audio/piano/36.m4a" },
            { midiNumber: 37, midiOctave: "2", noteName: "C#/Db", filePath: "/audio/piano/37.m4a" },
            { midiNumber: 38, midiOctave: "2", noteName: "D", filePath: "/audio/piano/38.m4a" },
            { midiNumber: 39, midiOctave: "2", noteName: "D#/Eb", filePath: "/audio/piano/39.m4a" },
            { midiNumber: 40, midiOctave: "2", noteName: "E", filePath: "/audio/piano/40.m4a" },
            { midiNumber: 41, midiOctave: "2", noteName: "F", filePath: "/audio/piano/41.m4a" },
            { midiNumber: 42, midiOctave: "2", noteName: "F#/Gb", filePath: "/audio/piano/42.m4a" },
            { midiNumber: 43, midiOctave: "2", noteName: "G", filePath: "/audio/piano/43.m4a" },
            { midiNumber: 44, midiOctave: "2", noteName: "G#/Ab", filePath: "/audio/piano/44.m4a" },
            { midiNumber: 45, midiOctave: "2", noteName: "A", filePath: "/audio/piano/45.m4a" },
            { midiNumber: 46, midiOctave: "2", noteName: "A#/Bb", filePath: "/audio/piano/46.m4a" },
            { midiNumber: 47, midiOctave: "2", noteName: "B", filePath: "/audio/piano/47.m4a" },
            { midiNumber: 48, midiOctave: "3", noteName: "C", filePath: "/audio/piano/48.m4a" },
            { midiNumber: 49, midiOctave: "3", noteName: "C#/Db", filePath: "/audio/piano/49.m4a" },
            { midiNumber: 50, midiOctave: "3", noteName: "D", filePath: "/audio/piano/50.m4a" },
            { midiNumber: 51, midiOctave: "3", noteName: "D#/Eb", filePath: "/audio/piano/51.m4a" },
            { midiNumber: 52, midiOctave: "3", noteName: "E", filePath: "/audio/piano/52.m4a" },
            { midiNumber: 53, midiOctave: "3", noteName: "F", filePath: "/audio/piano/53.m4a" },
            { midiNumber: 54, midiOctave: "3", noteName: "F#/Gb", filePath: "/audio/piano/54.m4a" },
            { midiNumber: 55, midiOctave: "3", noteName: "G", filePath: "/audio/piano/55.m4a" },
            { midiNumber: 56, midiOctave: "3", noteName: "G#/Ab", filePath: "/audio/piano/56.m4a" },
            { midiNumber: 57, midiOctave: "3", noteName: "A", filePath: "/audio/piano/57.m4a" },
            { midiNumber: 58, midiOctave: "3", noteName: "A#/Bb", filePath: "/audio/piano/58.m4a" },
            { midiNumber: 59, midiOctave: "3", noteName: "B", filePath: "/audio/piano/59.m4a" },
            { midiNumber: 60, midiOctave: "4", noteName: "C", filePath: "/audio/piano/60.m4a" },
            { midiNumber: 61, midiOctave: "4", noteName: "C#/Db", filePath: "/audio/piano/61.m4a" },
            { midiNumber: 62, midiOctave: "4", noteName: "D", filePath: "/audio/piano/62.m4a" },
            { midiNumber: 63, midiOctave: "4", noteName: "D#/Eb", filePath: "/audio/piano/63.m4a" },
            { midiNumber: 64, midiOctave: "4", noteName: "E", filePath: "/audio/piano/64.m4a" },
            { midiNumber: 65, midiOctave: "4", noteName: "F", filePath: "/audio/piano/65.m4a" },
            { midiNumber: 66, midiOctave: "4", noteName: "F#/Gb", filePath: "/audio/piano/66.m4a" },
            { midiNumber: 67, midiOctave: "4", noteName: "G", filePath: "/audio/piano/67.m4a" },
            { midiNumber: 68, midiOctave: "4", noteName: "G#/Ab", filePath: "/audio/piano/68.m4a" },
            { midiNumber: 69, midiOctave: "4", noteName: "A", filePath: "/audio/piano/69.m4a" },
            { midiNumber: 70, midiOctave: "4", noteName: "A#/Bb", filePath: "/audio/piano/70.m4a" },
            { midiNumber: 71, midiOctave: "4", noteName: "B", filePath: "/audio/piano/71.m4a" },
            { midiNumber: 72, midiOctave: "5", noteName: "C", filePath: "/audio/piano/72.m4a" },
            { midiNumber: 73, midiOctave: "5", noteName: "C#/Db", filePath: "/audio/piano/73.m4a" },
            { midiNumber: 74, midiOctave: "5", noteName: "D", filePath: "/audio/piano/74.m4a" },
            { midiNumber: 75, midiOctave: "5", noteName: "D#/Eb", filePath: "/audio/piano/75.m4a" },
            { midiNumber: 76, midiOctave: "5", noteName: "E", filePath: "/audio/piano/76.m4a" },
            { midiNumber: 77, midiOctave: "5", noteName: "F", filePath: "/audio/piano/77.m4a" },
            { midiNumber: 78, midiOctave: "5", noteName: "F#/Gb", filePath: "/audio/piano/78.m4a" },
            { midiNumber: 79, midiOctave: "5", noteName: "G5", filePath: "/audio/piano/79.m4a" },
            { midiNumber: 80, midiOctave: "5", noteName: "G#/Ab", filePath: "/audio/piano/80.m4a" },
            { midiNumber: 81, midiOctave: "5", noteName: "A5", filePath: "/audio/piano/81.m4a" },
            { midiNumber: 82, midiOctave: "5", noteName: "A#/Bb", filePath: "/audio/piano/82.m4a" },
            { midiNumber: 83, midiOctave: "5", noteName: "B", filePath: "/audio/piano/83.m4a" },
            { midiNumber: 84, midiOctave: "6", noteName: "C", filePath: "/audio/piano/84.m4a" },
            { midiNumber: 85, midiOctave: "6", noteName: "C#/Db", filePath: "/audio/piano/85.m4a" },
            { midiNumber: 86, midiOctave: "6", noteName: "D", filePath: "/audio/piano/86.m4a" },
            { midiNumber: 87, midiOctave: "6", noteName: "D#/Eb", filePath: "/audio/piano/87.m4a" },
            { midiNumber: 88, midiOctave: "6", noteName: "E", filePath: "/audio/piano/88.m4a" },
            { midiNumber: 89, midiOctave: "6", noteName: "F", filePath: "/audio/piano/89.m4a" },
            { midiNumber: 90, midiOctave: "6", noteName: "F#/Gb", filePath: "/audio/piano/90.m4a" },
            { midiNumber: 91, midiOctave: "6", noteName: "G", filePath: "/audio/piano/91.m4a" },
            { midiNumber: 92, midiOctave: "6", noteName: "G#/Ab", filePath: "/audio/piano/92.m4a" },
            { midiNumber: 93, midiOctave: "6", noteName: "A", filePath: "/audio/piano/93.m4a" },
            { midiNumber: 94, midiOctave: "6", noteName: "A#/Bb", filePath: "/audio/piano/94.m4a" },
            { midiNumber: 95, midiOctave: "6", noteName: "B", filePath: "/audio/piano/95.m4a" },
            { midiNumber: 96, midiOctave: "7", noteName: "C", filePath: "/audio/piano/96.m4a" },
            { midiNumber: 97, midiOctave: "7", noteName: "C#/Db", filePath: "/audio/piano/97.m4a" },
            { midiNumber: 98, midiOctave: "7", noteName: "D", filePath: "/audio/piano/98.m4a" },
            { midiNumber: 99, midiOctave: "7", noteName: "D#/Eb", filePath: "/audio/piano/99.m4a" },
            { midiNumber: 100, midiOctave: "7", noteName: "E", filePath: "/audio/piano/100.m4a" },
            { midiNumber: 101, midiOctave: "7", noteName: "F", filePath: "/audio/piano/101.m4a" },
            { midiNumber: 102, midiOctave: "7", noteName: "F#/Gb", filePath: "/audio/piano/102.m4a" },
            { midiNumber: 103, midiOctave: "7", noteName: "G", filePath: "/audio/piano/103.m4a" }
        ]
    },
    {
        instrumentName: "Rhodes",
        instrumentSounds: [
            { midiNumber: 36, midiOctave: "2", noteName: "C", filePath: "/audio/rhodes/36.m4a" },
            { midiNumber: 37, midiOctave: "2", noteName: "C#/Db", filePath: "/audio/rhodes/37.m4a" },
            { midiNumber: 38, midiOctave: "2", noteName: "D", filePath: "/audio/rhodes/38.m4a" },
            { midiNumber: 39, midiOctave: "2", noteName: "D#/Eb", filePath: "/audio/rhodes/39.m4a" },
            { midiNumber: 40, midiOctave: "2", noteName: "E", filePath: "/audio/rhodes/40.m4a" },
            { midiNumber: 41, midiOctave: "2", noteName: "F", filePath: "/audio/rhodes/41.m4a" },
            { midiNumber: 42, midiOctave: "2", noteName: "F#/Gb", filePath: "/audio/rhodes/42.m4a" },
            { midiNumber: 43, midiOctave: "2", noteName: "G", filePath: "/audio/rhodes/43.m4a" },
            { midiNumber: 44, midiOctave: "2", noteName: "G#/Ab", filePath: "/audio/rhodes/44.m4a" },
            { midiNumber: 45, midiOctave: "2", noteName: "A", filePath: "/audio/rhodes/45.m4a" },
            { midiNumber: 46, midiOctave: "2", noteName: "A#/Bb", filePath: "/audio/rhodes/46.m4a" },
            { midiNumber: 47, midiOctave: "2", noteName: "B", filePath: "/audio/rhodes/47.m4a" },
            { midiNumber: 48, midiOctave: "3", noteName: "C", filePath: "/audio/rhodes/48.m4a" },
            { midiNumber: 49, midiOctave: "3", noteName: "C#/Db", filePath: "/audio/rhodes/49.m4a" },
            { midiNumber: 50, midiOctave: "3", noteName: "D", filePath: "/audio/rhodes/50.m4a" },
            { midiNumber: 51, midiOctave: "3", noteName: "D#/Eb", filePath: "/audio/rhodes/51.m4a" },
            { midiNumber: 52, midiOctave: "3", noteName: "E", filePath: "/audio/rhodes/52.m4a" },
            { midiNumber: 53, midiOctave: "3", noteName: "F", filePath: "/audio/rhodes/53.m4a" },
            { midiNumber: 54, midiOctave: "3", noteName: "F#/Gb", filePath: "/audio/rhodes/54.m4a" },
            { midiNumber: 55, midiOctave: "3", noteName: "G", filePath: "/audio/rhodes/55.m4a" },
            { midiNumber: 56, midiOctave: "3", noteName: "G#/Ab", filePath: "/audio/rhodes/56.m4a" },
            { midiNumber: 57, midiOctave: "3", noteName: "A", filePath: "/audio/rhodes/57.m4a" },
            { midiNumber: 58, midiOctave: "3", noteName: "A#/Bb", filePath: "/audio/rhodes/58.m4a" },
            { midiNumber: 59, midiOctave: "3", noteName: "B", filePath: "/audio/rhodes/59.m4a" },
            { midiNumber: 60, midiOctave: "4", noteName: "C", filePath: "/audio/rhodes/60.m4a" },
            { midiNumber: 61, midiOctave: "4", noteName: "C#/Db", filePath: "/audio/rhodes/61.m4a" },
            { midiNumber: 62, midiOctave: "4", noteName: "D", filePath: "/audio/rhodes/62.m4a" },
            { midiNumber: 63, midiOctave: "4", noteName: "D#/Eb", filePath: "/audio/rhodes/63.m4a" },
            { midiNumber: 64, midiOctave: "4", noteName: "E", filePath: "/audio/rhodes/64.m4a" },
            { midiNumber: 65, midiOctave: "4", noteName: "F", filePath: "/audio/rhodes/65.m4a" },
            { midiNumber: 66, midiOctave: "4", noteName: "F#/Gb", filePath: "/audio/rhodes/66.m4a" },
            { midiNumber: 67, midiOctave: "4", noteName: "G", filePath: "/audio/rhodes/67.m4a" },
            { midiNumber: 68, midiOctave: "4", noteName: "G#/Ab", filePath: "/audio/rhodes/68.m4a" },
            { midiNumber: 69, midiOctave: "4", noteName: "A", filePath: "/audio/rhodes/69.m4a" },
            { midiNumber: 70, midiOctave: "4", noteName: "A#/Bb", filePath: "/audio/rhodes/70.m4a" },
            { midiNumber: 71, midiOctave: "4", noteName: "B", filePath: "/audio/rhodes/71.m4a" },
            { midiNumber: 72, midiOctave: "5", noteName: "C", filePath: "/audio/rhodes/72.m4a" },
            { midiNumber: 73, midiOctave: "5", noteName: "C#/Db", filePath: "/audio/rhodes/73.m4a" },
            { midiNumber: 74, midiOctave: "5", noteName: "D", filePath: "/audio/rhodes/74.m4a" },
            { midiNumber: 75, midiOctave: "5", noteName: "D#/Eb", filePath: "/audio/rhodes/75.m4a" },
            { midiNumber: 76, midiOctave: "5", noteName: "E", filePath: "/audio/rhodes/76.m4a" },
            { midiNumber: 77, midiOctave: "5", noteName: "F", filePath: "/audio/rhodes/77.m4a" },
            { midiNumber: 78, midiOctave: "5", noteName: "F#/Gb", filePath: "/audio/rhodes/78.m4a" },
            { midiNumber: 79, midiOctave: "5", noteName: "G5", filePath: "/audio/rhodes/79.m4a" },
            { midiNumber: 80, midiOctave: "5", noteName: "G#/Ab", filePath: "/audio/rhodes/80.m4a" },
            { midiNumber: 81, midiOctave: "5", noteName: "A5", filePath: "/audio/rhodes/81.m4a" },
            { midiNumber: 82, midiOctave: "5", noteName: "A#/Bb", filePath: "/audio/rhodes/82.m4a" },
            { midiNumber: 83, midiOctave: "3", noteName: "B", filePath: "/audio/rhodes/83.m4a" },
            { midiNumber: 84, midiOctave: "6", noteName: "C", filePath: "/audio/rhodes/84.m4a" },
            { midiNumber: 85, midiOctave: "6", noteName: "C#/Db", filePath: "/audio/rhodes/85.m4a" },
            { midiNumber: 86, midiOctave: "6", noteName: "D", filePath: "/audio/rhodes/86.m4a" },
            { midiNumber: 87, midiOctave: "6", noteName: "D#/Eb", filePath: "/audio/rhodes/87.m4a" },
            { midiNumber: 88, midiOctave: "6", noteName: "E", filePath: "/audio/rhodes/88.m4a" },
            { midiNumber: 89, midiOctave: "6", noteName: "F", filePath: "/audio/rhodes/89.m4a" },
            { midiNumber: 90, midiOctave: "6", noteName: "F#/Gb", filePath: "/audio/rhodes/90.m4a" },
            { midiNumber: 91, midiOctave: "6", noteName: "G", filePath: "/audio/rhodes/91.m4a" },
            { midiNumber: 92, midiOctave: "6", noteName: "G#/Ab", filePath: "/audio/rhodes/92.m4a" },
            { midiNumber: 93, midiOctave: "6", noteName: "A", filePath: "/audio/rhodes/93.m4a" },
            { midiNumber: 94, midiOctave: "6", noteName: "A#/Bb", filePath: "/audio/rhodes/94.m4a" },
            { midiNumber: 95, midiOctave: "6", noteName: "B", filePath: "/audio/rhodes/95.m4a" },
            { midiNumber: 96, midiOctave: "7", noteName: "C", filePath: "/audio/rhodes/96.m4a" },
            { midiNumber: 97, midiOctave: "7", noteName: "C#/Db", filePath: "/audio/rhodes/97.m4a" },
            { midiNumber: 98, midiOctave: "7", noteName: "D", filePath: "/audio/rhodes/98.m4a" },
            { midiNumber: 99, midiOctave: "7", noteName: "D#/Eb", filePath: "/audio/rhodes/99.m4a" },
            { midiNumber: 100, midiOctave: "7", noteName: "E", filePath: "/audio/rhodes/100.m4a" },
            { midiNumber: 101, midiOctave: "7", noteName: "F", filePath: "/audio/rhodes/101.m4a" },
            { midiNumber: 102, midiOctave: "7", noteName: "F#/Gb", filePath: "/audio/rhodes/102.m4a" },
            { midiNumber: 103, midiOctave: "7", noteName: "G", filePath: "/audio/rhodes/103.m4a" }
        ]
    }
]
