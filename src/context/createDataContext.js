/* eslint-disable import/no-anonymous-default-export */

// Setup reducer for a storage

import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    // reuseful Context here
    const Context = React.createContext();

    // React Node children that Provide will wrap 
    // For instance, BlogProvider's children components
    const Provider = ({ children }) => {

        // Creating reducer by implementing useReducer
        const [ state, dispatch ] = useReducer(reducer, initialState);
        const actionsBound = {}; 
        
        // Actions loop 
        for(let key in actions) {
            // assign action with invocation.
            // Please note each action defined in BlogProvider is curry function.
            actionsBound[key] = actions[key](dispatch, state);
        }

        return (
            // value : state object and each action inside of actionBound object
            <Context.Provider value={{ state, ...actionsBound}}>
                { children }
            </Context.Provider>
        );
    }

    return { Context, Provider };
};