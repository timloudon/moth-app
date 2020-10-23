import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MainHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={mainHeaderStyle}>MOTH</h1>
                <Link to='/'>Home</Link>
                <Link to='/components/Exercise'>Exercise</Link>
                <Link to='/components/Options'>Options</Link>
            </React.Fragment>
        )
    }
}

const mainHeaderStyle = {
    fontFamily: 'Rubik, sans-serif',
    fontSize: '96px',
    textDecoration: 'bold',
    margin: '0'
}

export default MainHeader
