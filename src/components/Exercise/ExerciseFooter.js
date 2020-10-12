import React, { Component } from "react";
import { ReactComponent as PlayIcon } from "./../../assets/icons/play-button-o.svg";
import { ReactComponent as NextIcon } from "./../../assets/icons/play-track-next-o.svg";

export class ExerciseFooter extends Component {
  render() {
    return (
      <>
        <PlayIcon />
        <NextIcon />
      </>
    );
  }
}

export default ExerciseFooter;
