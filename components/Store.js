import React from 'react'

export const initialState = { score: 0 }

export const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState
        case "increment":
            return { score: state.count + 1 }
        case "decrement":
            return { score: state.count - 1 }
        default:
            return state
    }
}

export const Context = React.createContext()