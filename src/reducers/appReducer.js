import { createReducer } from "@reduxjs/toolkit";
import { newPlayer, correctGuess, incorrectGuess } from '../actions/appActions.js'

const appReducer = createReducer([], (builder) => {
    builder.addCase(correctGuess, (state, action) => {
        state.push(action.payload)
    }).addCase(incorrectGuess, (state, action) => {
        state.push(action.payload)
    }).addCase(newPlayer, (state, action) => {
        state = action.payload;
        return state;
    })
})

export default appReducer;