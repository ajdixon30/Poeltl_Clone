/**
 * TODO:
 * Refactor Header as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { Container, Navbar } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>POELTL CLONE</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;