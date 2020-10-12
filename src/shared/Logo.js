import React, { Component } from 'react'

export class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={circle}>
                    <div style={semi}></div>
                    <div style={bottom}></div>
                </div>
            </React.Fragment>
        )
    }
}

const circle = {
    padding: '0',
    width: '148px',
    minHeight: '148px',
    background: '#32e0c4',
    border: '10px solid #000000',
    borderRadius: '50%',
    transform: 'rotate(225deg)'
}

const semi = {
    position: 'absolute',
    top: '5px',
    left: '5px',
    width: '138px',
    height: '70px',
    borderRadius: '138px 138px 0 0',
    background: '#393e46'
}

const bottom = {
    // Use of spread operator to copy in rules to make another semi-circle
    ...semi,
    top: '74px',
    left: '5px',
    borderRadius: '0 0 138px 138px',
    background: '#222831'
}

export default Logo
