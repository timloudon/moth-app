import { scalePatterns, cadencePatterns } from "./musicResources";

export function getScaleMidiNumbers(scalePattern, lowestMidiNoteInKey, noteRange) {
    // use noteRange?
    let scaleNotes = [];
    let firstNote = lowestMidiNoteInKey;
    scaleNotes.push(firstNote);
    for (let i = 0; i < scalePattern.length; i++) {
        const nextNote = scaleNotes[i] + scalePattern[i];
        scaleNotes.push(nextNote);
    }
    return scaleNotes;
}

export const findScalePattern = (scaleType) => {
    const scaleObject = scalePatterns.find(
        (pattern) => pattern.type === scaleType
    );
    const scalePattern = scaleObject.pattern;
    return scalePattern;
};

export const findChordInCadencePattern = (index, cadenceType) => {
    const cadenceObject = cadencePatterns.find((pattern) => pattern.type === cadenceType);
    const cadencePattern = cadenceObject.pattern[index];
    return cadencePattern;
};