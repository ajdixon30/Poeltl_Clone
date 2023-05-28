import { createReducer } from "@reduxjs/toolkit";
import { newPlayer, correctGuess, incorrectGuess, gameOver } from '../actions/appActions.js'

const appReducer = createReducer([], (builder) => {
    builder.addCase(correctGuess, (state, action) => {
        state = action.payload;
        return state;
    }).addCase(incorrectGuess, (state, action) => {
        state = action.payload;
        return state;
    }).addCase(newPlayer, (state, action) => {
        state = action.payload;
        return state;
    }).addCase(gameOver, (state, action) => {
        state = action.payload;
        return state;
    })
})

export default appReducer;