import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

import "./Navigation.css"

const Navigation = () => {
    const href1 = process.env.REACT_APP_MENU_1
    const href2 = process.env.REACT_APP_MENU_2
    const href3 = process.env.REACT_APP_MENU_3
    const href4 = process.env.REACT_APP_MENU_4

    return (
        <Navbar className="navigation">
            <Container>
                <Navbar.Brand>Burnout tester</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Главная</Nav.Link>
                        <Nav.Link>О проекте</Nav.Link>
                        <NavDropdown title="Тесты" id="basic-nav-dropdown">
                            <NavDropdown.Item href={href1}>
                                Профессиональное выгорание
                            </NavDropdown.Item>
                            <NavDropdown.Item href={href2}>
                                Хроническое утомление
                            </NavDropdown.Item>
                            <NavDropdown.Item href={href3}>
                                Способы совладающего поведения
                            </NavDropdown.Item>
                            <NavDropdown.Item href={href4}>
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
