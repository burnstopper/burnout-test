import React from "react"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavDropDown = () => {
    return (
        <Nav variant="pills" activeKey="1" className="float-end">
            <NavDropdown title="Меню" id="nav-dropdown" menuVariant="dark">
                <NavDropdown.Item eventKey="1">
                    Профессиональное выгорание
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                    Хроническое утомление
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="3">
                    Способы совладающего поведения
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4">
                    Диагностика иррациональных установок (SPB)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="5">О нас</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default NavDropDown
