import React from 'react';
import { Link } from 'react-router-dom';
import { scalePatterns } from "../../shared/scales";

export default function MainPage() {

    return (
        <React.Fragment>
            <Link to={{ pathname: "../Exercise/ExerciseContainer", state: { pattern: scalePatterns[1].pattern, title: scalePatterns[1].scaleType } }}><h1>Major</h1></Link>
            <Link to={{ pathname: "../Exercise/ExerciseContainer", state: scalePatterns[2].pattern }}><h1>Minor</h1></Link>
        </React.Fragment>
    )
}