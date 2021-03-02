import React, { useState } from "react";
import useSamples from "../../resources/useSamples";
import Exercise from "./Exercise";
import Instrument from "./Instrument";
import SpinnerLogo from "../common/SpinnerLogo";
import { allNoteNames, keyMaps } from "../../resources/musicResources";
// import { getScaleNotes, getScalesOfKeySignatures } from '../../resources/helperFunctions'

interface Props {
  ctx: AudioContext;
  routeProps: any;
  instrumentType: string;
  cadenceType: string;
  keySignatures: Array<string>;
  exerciseLength: Array<number>;
}

function SamplesProvider({
  ctx,
  routeProps,
  instrumentType,
  cadenceType,
  keySignatures,
  exerciseLength,
}: Props): JSX.Element {
  // cadenceType state not yet in use (pass to Exercise when ready)

  const scaleType = routeProps.location.state.scale.type;

  const getScalesOfKeySignatures = (
    scaleType: string,
    questionKeySignatures: Array<string>
  ) => {
    const getTonality: any = keyMaps.find(
      (keyType: any) => keyType.tonality === scaleType
    );
    const getKeys: any = getTonality.keys.filter((key: any) =>
      questionKeySignatures.includes(key.keyName)
    );
    getKeys.forEach((key: any) => {
      key.unsortedScale = key.noteNameIndexMap.map(
        (val: any) => allNoteNames[val]
      );
      key.tonicIndex = key.unsortedScale.findIndex(
        (el: any) => el === key.keyName
      );
      key.scale = key.unsortedScale
        .splice(key.tonicIndex)
        .concat(key.unsortedScale);
      // Not sure whether to use this as I may want to loop over multiple octaves:
      // key.scale.push(key.scale[0])
      delete key.unsortedScale;
      delete key.tonicIndex;
    });
    return getKeys;
  };

  const [samplesNoteRange, setNoteRange] = useState([42, 84]);
  const [questionsNoteRange, setQuestionsNoteRange] = useState([60, 72]);
  const [instrument, setInstrument] = useState(
    new Instrument(instrumentType, samplesNoteRange)
  );
  const [isLoading] = useSamples(instrument, ctx);
  const [exerciseKeys, setKeys] = useState(
    getScalesOfKeySignatures(scaleType, keySignatures)
  );

  return (
    <>
      {isLoading ? (
        <SpinnerLogo isLoading={isLoading} />
      ) : (
        <Exercise
          routeProps={routeProps}
          ctx={ctx}
          instrument={instrument}
          questionsNoteRange={questionsNoteRange}
          exerciseLength={exerciseLength}
          exerciseKeys={exerciseKeys}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default SamplesProvider;
