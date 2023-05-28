import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const correctGuess = createAction('CORRECT_GUESS', (guess) => {
    return {
        guess,
        success: true,
        fail: false
    }
});

export const incorrectGuess = createAction('INCORRECT_GUESS', (guess) => {
    return {
        guess,
        success: false,
    }
}); 

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
            },
            guesses: [],
            success: false,
            fail: false,
        }
    }
});

export const callPlayersAPI = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3004/players?id=${id}`).then(response => {
            let player = response.data;
            dispatch(newPlayer(player[0]));
        });
    }
}