import React, { Component } from 'react';
import FlareComponent from 'flare-react';

export class Splash extends Component {
    render() {
        return (
            <React.Fragment>
                <FlareComponent width={ 200 } height={ 200 } animationName="spin" file='spin.flr'/>     
            </React.Fragment>
        )
    }
}

export default Splash