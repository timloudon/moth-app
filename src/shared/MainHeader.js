import React, { Component } from 'react'

export class MainHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={mainHeaderStyle}>MOTH</h1>
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
