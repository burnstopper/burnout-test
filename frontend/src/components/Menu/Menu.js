import React, { useState } from "react"
import "./Menu.css"

function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                className="nav-menu-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Toggle Side Menu
            </button>
            <aside
                className={
                    "nav-menu " + (isOpen ? "nav-menu-open" : "nav-menu-closed")
                }
            >
                <ul className="nav-menu-list">
                    <li>
                        <a className="nav-menu-link" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-menu-link" href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-menu-link" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Menu
