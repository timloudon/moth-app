class Note {
        midiNumber: number
        midiOctave!: number
        noteName!: Array<string>    
        filePath: string

        constructor(midiNumber: number, filePath: string) {
            this.midiNumber = midiNumber
            switch (true) {
                case (midiNumber >= 36 && midiNumber <= 47):
                    this.midiOctave = 2
                    break
                case (midiNumber >= 48 && midiNumber <= 59):
                    this.midiOctave = 3
                    break
                case (midiNumber >= 60 && midiNumber <= 71):
                    this.midiOctave = 4
                    break
                case (midiNumber >= 72 && midiNumber <= 83):
                    this.midiOctave = 5
                    break
                case (midiNumber >= 84 && midiNumber <= 95):
                    this.midiOctave = 6
                    break
                case (midiNumber >= 96 && midiNumber <= 103):
                    this.midiOctave = 7
            }
            switch (true) {
                case (midiNumber === 36 || !(midiNumber % 12)):
                    this.noteName = ["C"]
                    break
                case (!((midiNumber - 1) % (12))):
                    this.noteName = ["C#", "Db"]
                    break
                case (!((midiNumber - 2) % (12))):
                    this.noteName = ["D"]
                    break
                case (!((midiNumber - 3) % (12))):
                    this.noteName = ["D#", "Eb"]
                    break
                case (!((midiNumber - 4) % (12))):
                    this.noteName = ["E"]
                    break
                case (!((midiNumber - 5) % (12))):
                    this.noteName = ["E#", "F"]
                    break
                case (!((midiNumber - 6) % (12))):
                    this.noteName = ["F#", "Gb"]
                    break
                case (!((midiNumber - 7) % (12))):
                    this.noteName = ["G"]
                    break
                case (!((midiNumber - 8) % (12))):
                    this.noteName = ["G#", "Ab"]
                    break
                case (!((midiNumber - 9) % (12))):
                    this.noteName = ["A"]
                    break
                case (!((midiNumber - 10) % (12))):
                    this.noteName = ["A#", "Bb"]
                    break
                case (!((midiNumber - 11) % (12))):
                    this.noteName = ["B", "Cb"]
                    break
            }
            this.filePath = filePath
        }
    }

export default Note
