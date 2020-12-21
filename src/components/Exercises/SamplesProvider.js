import React from 'react';
import useSamples from '../../resources/useSamples';
import Exercise from './Exercise';
import { instruments } from '../../resources/musicResources';
import SpinnerLogo from '../common/SpinnerLogo';

function SamplesProvider({ routeProps, instrumentType, ctx }) {
    const [isLoading, samples] = useSamples(instruments, instrumentType, ctx);

    // if (isLoading) { return <div>Loading...</div> }
    // if (!isLoading) { return (<Exercise routeProps={routeProps} ctx={ctx} instrumentType={instrumentType} samples={samples} />) }
    // let display;
    // if (isLoading) { display = <div>Loading...</div> }
    // if (!isLoading) { display = (<Exercise isLoading={isLoading} routeProps={routeProps} ctx={ctx} instrumentType={instrumentType} samples={samples} />) }
    // return (display);
    return (
        <>
            {isLoading
                ? <SpinnerLogo />
                : (<Exercise routeProps={routeProps} ctx={ctx} instrumentType={instrumentType} samples={samples} isLoading={isLoading} />)
            }
        </>
    )
}

export default SamplesProvider
