import { scalePatterns, cadencePatterns } from "./musicResources";

export function getScaleNotes(scalePattern, allNotes) {
    let scaleNotes = [];
    let firstNote = allNotes[0];
    let currentMidiNumber;
    let nextMidiNumber = firstNote.midiNumber;
    let lastAvailableMidiNumber = allNotes[allNotes.length - 1].midiNumber;

    scaleNotes.push(firstNote);

    for (let i = 0; nextMidiNumber < lastAvailableMidiNumber; i++) {
        let patternIndex = i % scalePattern.length;
        let increment = scalePattern[patternIndex];
        currentMidiNumber = scaleNotes[i].midiNumber;
        nextMidiNumber = currentMidiNumber + increment;
        let nextNote = allNotes.find((note) => note.midiNumber === nextMidiNumber);
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