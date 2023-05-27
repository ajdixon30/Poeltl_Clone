/**
 * TODO:
 * Refactor Start Game as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { Button, Container } from "react-bootstrap"

const StartGame = () => {
    return (
        <Container>
            <Button variant="primary">New Game</Button>
        </Container>
    )
}

export default StartGame;