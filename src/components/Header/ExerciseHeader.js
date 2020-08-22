import React, { Component } from "react";
import {ReactComponent as CloseIcon} from './../../assets/icons/close-o.svg';
import {ReactComponent as MenuIcon} from './../../assets/icons/menu.svg';

export class ExerciseHeader extends Component {
    render() {
        return (
            <>
                <CloseIcon />
                <h1>CHROMATIC</h1>
                <MenuIcon />
            </>
        )
    }
}

export default ExerciseHeader
