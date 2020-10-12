import React, { Component } from 'react';
import FlareComponent from 'flare-react';
import MainHeader from '../../shared/MainHeader';

export class Splash extends Component {
    render() {
        return (
            <React.Fragment>
                <FlareComponent 
                    width={ 200 } 
                    height={ 200 } 
                    animationName="spin" 
                    file='spin.flr'/>
                <MainHeader />
                <div style={{transform: 'rotate(180deg)'}}>
                <FlareComponent 
                    width={ 200 } 
                    height={ 200 } 
                    animationName="spinDelay"
                    file='spin.flr'/>     
                </div>
            </React.Fragment>
        )
    }
}

export default Splash