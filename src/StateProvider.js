// import React, {createContext, useState} from "react";
// import reducer, {initialState} from "./reducer";

export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );
export const useStateValue = () => useState(StateContext);