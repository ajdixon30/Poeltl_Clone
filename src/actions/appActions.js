import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const correctGuess = createAction('CORRECT_GUESS', (player, newGuessArr) => {
    return {
        payload: {
            player,
            guesses: newGuessArr,
            success: true,
            fail: false,
            modalMessage: 'CONGRATULATIONS!',
            inputDisabled: true,
            placeholder: 'CONGRATULATIONS!',
        }
    }
});

export const incorrectGuess = createAction('INCORRECT_GUESS', (player, newGuessArr, id) => {
    return {
        payload: {
            player,
            guesses: newGuessArr,
            success: false,
            fail: false,
            modalMessage: '',
            inputDisabled: false,
            placeholder: `Guess ${id} of 8`,
        }
    }
}); 

export const gameOver = createAction('GAME_OVER', (player, newGuessArr) => {
    return {
        payload: {
            player,
            guesses: newGuessArr,
            success: false,
            fail: false,
            modalMessage: 'GAME OVER!',
            inputDisabled: true,
            placeholder: 'GAME OVER!',
        }
    }
})

export const newPlayer = createAction('NEW_PLAYER', (player) => {
    return {
        payload: {
            player: {
                name: `${player.first_name} ${player.last_name}`,
                position: player.position,
                height: `${player.height_feet}'${player.height_inches}`,
                team: player.team.full_name,
                conference: player.team.conference,
                division: player.team.division,
                abbreviation: player.team.abbreviation,
                number: player.number,
                inches: player.height_only_inches,
                headshot: player.headshot,
                age: player.age,
                positions: player.positions,
            },
            guesses: [],
            success: false,
            fail: false,
            modalMessage: '',
            inputDisabled: false,
            placeholder: 'Guess 1 of 8',
        }
    }
});

export const callPlayersAPI = (id) => {
    return (dispatch) => {
        axios.get(`https://poeltl-clone-backend-2da372512efa.herokuapp.com/players/${id}`).then(response => {
            let player = response.data;
            dispatch(newPlayer(player));
        });
    }
}