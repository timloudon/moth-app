import React from 'react';
import useSamples from '../../resources/useSamples';
import Exercise from './Exercise';
import { instruments } from '../../resources/musicResources';
import SpinnerLogo from '../common/SpinnerLogo';

function SamplesProvider({ routeProps, instrumentType, ctx }) {
    const [isLoading, samples] = useSamples(instruments, instrumentType, ctx);

    return (
        <>
            {isLoading
                ? <SpinnerLogo />
                : (<Exercise
                    routeProps={routeProps}
                    ctx={ctx}
                    instrumentType={instrumentType}
                    samples={samples}
                    isLoading={isLoading} />)
            }
        </>
    )
}

export default SamplesProvider
