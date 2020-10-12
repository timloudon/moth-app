import React, { Component } from 'react';
import MainHeader from '../../shared/MainHeader';
import Logo from '../../shared/Logo';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <MainHeader />
                <div>
                    <Logo />
                    <h2>MAJOR</h2>
                </div>
                <div>
                    
                </div>
                <h2>MINOR</h2>
                <h2>MAJOR CHROMATIC</h2>
                <h2>MINOR CHROMATIC</h2>
            </React.Fragment>
        )
    }
}

export default Home;