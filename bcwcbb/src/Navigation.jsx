import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"

export default function Navigation(){



    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="home">BCWCBB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="pics">Pics</Nav.Link>
                <NavDropdown title="Lists" id="basic-nav-dropdown">
                <NavDropdown.Item href="horniest">Horniest</NavDropdown.Item>
                <NavDropdown.Item href="starbucks-horny">Starbucks Horny</NavDropdown.Item>
                <NavDropdown.Item href="hitlist">Hit List</NavDropdown.Item>
                <NavDropdown.Item href="sogood">So Good</NavDropdown.Item>
                <NavDropdown.Item href="badfoot">Bad Foot</NavDropdown.Item>
                <NavDropdown.Item href="homophobes">Homophobes</NavDropdown.Item>
                <NavDropdown.Item href="pee">Pee</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}



