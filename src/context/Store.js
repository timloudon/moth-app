// import React from "react";

// // All the AudioContext stuff goes here (inc. creating nodes and routing)
// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const CTX = React.createContext();

// /**
//  * To import into control components to access state variables and to send action to 
//  * change state and interact with Web Audio API
//  */
// export { CTX };

// // export function reducer(state, action) {
// //     switch(action.type) {
// //         case "START_OSC":
// //             // web audio logic for start osc
// //             return {...state, oscPlaying: true};
// //         default:
// //             console.log("reducer error .action", action);
// //             return {...state};
// //     }
// // }

// // export default function Store(props) {
// //     const stateHook = React.useReducer(reducer, {
// //         // all the initial values
// //         // e.g. osc1 settings: {...}
// //         // e.g. filter settings: {...}
// //     });

// return <CTX.Provider /*value={stateHook}*/>{props.children}</CTX.Provider>
