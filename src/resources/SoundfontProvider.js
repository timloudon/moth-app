// See https://github.com/danigb/soundfont-player
// for more documentation on prop options.
import React from 'react';
import PropTypes from 'prop-types';
import Soundfont from 'soundfont-player';

class SoundfontProvider extends React.Component {
    static propTypes = {
        instrumentName: PropTypes.string.isRequired,
        hostname: PropTypes.string.isRequired,
        format: PropTypes.oneOf(['mp3', 'ogg']),
        soundfont: PropTypes.oneOf(['MusyngKite', 'FluidR3_GM']),
        audioContext: PropTypes.instanceOf(window.AudioContext),
        render: PropTypes.func,
    };

    static defaultProps = {
        format: 'mp3',
        soundfont: 'MusyngKite',
        instrumentName: 'acoustic_grand_piano',
    };

    constructor(props) {
        super(props);
        // inital state is object with activeAudioNodes and instrument properties
        this.state = {
            activeAudioNodes: {},
            instrument: null,
        };
    }

    componentDidMount() {
        // sets the state.instrument
        this.loadInstrument(this.props.instrumentName);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.instrumentName !== this.props.instrumentName) {
            this.loadInstrument(this.props.instrumentName);
        }
    }

    loadInstrument = instrumentName => {
        // Make sure state is null
        this.setState({
            instrument: null,
        });
        // Loads the soundfont instrument
        Soundfont.instrument(this.props.audioContext, instrumentName, {
            format: this.props.format,
            soundfont: this.props.soundfont,
            nameToUrl: (name, soundfont, format) => {
                return `${this.props.hostname}/${soundfont}/${name}-${format}.js`;
            },
            // sets the state to the instrument ('acoustic grand piano' by default)
        }).then(instrument => {
            this.setState({
                instrument,
            });
        });
    };

    playNote = midiNumber => {
        // starts playing the audio context (promise)
        this.props.audioContext.resume().then(() => {
            // play method is standard
            const audioNode = this.state.instrument.play(midiNumber);
            // this changes the state of the activeAudioNodes property
            this.setState({
                activeAudioNodes: Object.assign({}, this.state.activeAudioNodes, {
                    [midiNumber]: audioNode,
                }),
            });
        });
    };

    stopNote = midiNumber => {
        this.props.audioContext.resume().then(() => {
            if (!this.state.activeAudioNodes[midiNumber]) {
                return;
            }
            const audioNode = this.state.activeAudioNodes[midiNumber];
            audioNode.stop();
            this.setState({
                activeAudioNodes: Object.assign({}, this.state.activeAudioNodes, {
                    [midiNumber]: null,
                }),
            });
        });
    };

    // Clear any residual notes that don't get called with stopNote
    stopAllNotes = () => {
        this.props.audioContext.resume().then(() => {
            const activeAudioNodes = Object.values(this.state.activeAudioNodes);
            activeAudioNodes.forEach(node => {
                if (node) {
                    node.stop();
                }
            });
            this.setState({
                activeAudioNodes: {},
            });
        });
    };

    render() {
        return this.props.render({
            isLoading: !this.state.instrument,
            playNote: this.playNote,
            stopNote: this.stopNote,
            stopAllNotes: this.stopAllNotes,
        });
    }
}

export default SoundfontProvider;
