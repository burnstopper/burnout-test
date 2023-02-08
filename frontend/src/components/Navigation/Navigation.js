import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

import "./Navigation.css"

const Navigation = () => {
    return (
        <Navbar className="navigation">
            <Container>
                <Navbar.Brand href="#home">Burnout tester</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#link">О проекте</Nav.Link>
                        <NavDropdown title="Тесты" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Профессиональное выгорание
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Хроническое утомление
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Способы совладающего поведения
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Диагностика иррациональных установок (SPB)
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
