import Note from './Note'

class Instrument {
    instrumentName: string
    instrumentSounds: Array<Note>

    constructor(instrumentType: string, rangeOfNotes: Array<number>) {
      this.instrumentName = instrumentType
      this.instrumentSounds = new Array(rangeOfNotes[1] - rangeOfNotes[0] + 1)
        .fill(0)
        .map(
          (_, i) =>
            new Note(
              rangeOfNotes[0] + i,
              `/audio/${instrumentType.toLowerCase()}/${
                rangeOfNotes[0] + i
              }.m4a`
            )
        );
    }
  }

export default Instrument
