/**
 * TODO:
 * Refactor Header as a Functional Component
 * Refactor using React Bootstrap
 * Refactor using Redux
 * Move JSON data to MongoDB
 */

import { Container, Navbar } from "react-bootstrap";
import "../styles/Header.css";

const Header = () => {
    return (
        <Navbar className="header">
            <Container>
                <Navbar.Brand style={{ color: "white" }}>POELTL CLONE</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;