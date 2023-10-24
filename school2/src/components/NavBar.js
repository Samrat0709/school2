import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/logo.webp';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary custom-nav">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} className='logo' alt="" />
                        <h1>Railway Higher Secondary School Alipurduar Junction</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            {/* <NavDropdown title="" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="/academic">Academics</Nav.Link>
                            <Nav.Link href="/admission">Admission</Nav.Link>
                            {/* <NavDropdown title="Admissions" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="/faculty">Faculty</Nav.Link>
                            {/* <NavDropdown title="" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/faculty">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="#home">Alumni</Nav.Link>
                            <Nav.Link href="#home">Campus</Nav.Link>
                            <Nav.Link href="/achievement">Achievments</Nav.Link>
                            {/* <NavDropdown title="Achievments" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/achievement">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="#home">Rules & Regulationss</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <Nav.Link href="/calendar">Calender</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            {/* <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/contact">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
