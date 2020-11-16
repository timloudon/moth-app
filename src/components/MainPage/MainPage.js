import React from 'react';
import { Link } from 'react-router-dom';
import {
    scalePatterns,
    cadenceTypes
} from "../../shared/scales";

export default function MainPage() {
    return (
        <React.Fragment>
            <Link to={{ pathname: "../Exercise/ExerciseContainer", state: { pattern: scalePatterns[1].pattern, cadence: cadenceTypes[0].sound, title: scalePatterns[1].scaleType } }}><h1>Major</h1></Link>
            <Link to={{ pathname: "../Exercise/ExerciseContainer", state: { pattern: scalePatterns[2].pattern, cadence: cadenceTypes[1].sound, title: scalePatterns[2].scaleType } }}><h1>Minor</h1></Link>
        </React.Fragment>
    )
}