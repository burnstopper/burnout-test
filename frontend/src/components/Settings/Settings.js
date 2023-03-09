import React from "react"
import { Dropdown } from "react-bootstrap"
import "./Settings.css"
import CookieLib from "../../utils/cookies"

const Settings = ({ toggleMode }) => {
    const resetCookie = () => {
        CookieLib.removeCookie()
    }

    return (
        <Dropdown className="settings">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Настройки
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={toggleMode}>
                    Режим тестировщика
                </Dropdown.Item>
                <Dropdown.Item onClicl={resetCookie}>
                    Удалить данные
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Settings
