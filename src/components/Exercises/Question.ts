class Question {
    key: string
    midiNumber: number
    noteName: string
    scaleTone: number
    keyScale: Array<string>

    constructor(key: string, midiNumber: number, noteName: string, scaleTone: number, keyScale: Array<string>) {
      this.key = key;
      this.midiNumber = midiNumber;
      this.noteName = noteName;
      this.scaleTone = scaleTone;
      this.keyScale = keyScale;
    }
  }

export default Question
