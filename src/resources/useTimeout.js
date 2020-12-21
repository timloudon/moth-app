import { useEffect, useRef } from 'react';

export function useTimeout(callback, delay) {
    const timeoutRef = useRef(null);
    const callbackRef = useRef(callback);

    // Remember the latest callback:
    //
    // Without this, if you change the callback, when setTimeout kicks in, it
    // will still call your old callback.
    //
    // If you add `callback` to useEffect's deps, it will work fine but the
    // timeout will be reset.
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Set up timeout:
    useEffect(() => {
        if (typeof delay === 'number') {
            timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
            // clear timeout if the component is unmounted or the delay changes
            return () => window.clearTimeout(timeoutRef.current || 0);
        }
    });

    return timeoutRef;
}


// This useTimeout Hook will only fire on the first render, unless the callback or the delay 
// value changes with the render (i.e. state change)
export function useTimeoutComplex(callback, delay) {
    const timeoutRef = useRef(null);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (typeof delay === 'number') {
            timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
            // clear timeout if the component is unmounted or the delay changes
            return () => window.clearTimeout(timeoutRef.current || 0);
        }
    }, [delay]);

    return timeoutRef;
}
