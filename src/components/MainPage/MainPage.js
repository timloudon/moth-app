import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <React.Fragment>
            <Link to={{ pathname: "../Exercise/ExerciseContainer", state: { type: "Major" } }}><h1>Major</h1></Link>
            <Link to={{ pathname: "../Exercise/ExerciseContainer", state: { type: "Minor" } }}><h1>Minor</h1></Link>
        </React.Fragment>
    )
}