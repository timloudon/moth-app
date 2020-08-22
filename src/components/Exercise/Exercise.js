import React, { Component } from 'react';
import ExerciseHeader from './../Header/ExerciseHeader';
import ExerciseFooter from './../Footer/ExerciseFooter';

export class Exercise extends Component {
    render() {
        return (
            <div>
                <ExerciseHeader />
                <ExerciseFooter />
            </div>
        )
    }
}

export default Exercise;
