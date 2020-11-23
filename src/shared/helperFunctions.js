export function useTimeout() {
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
    }, [callback])

    // Set up timeout:
    useEffect(() => {
        timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
        // clear timeout if the component is unmounted or the delay changes
        return () => window.clearTimeout(timeoutRef.current || 0);
    }, [delay])

    return timeoutRef;
}