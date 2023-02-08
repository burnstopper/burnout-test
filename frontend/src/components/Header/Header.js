import React, { useEffect, useState } from "react"
import Account from "../Account/Account"
import "./Header.css"
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import Settings from "../Settings/Settings"

const Header = () => {
    const [mode, setMode] = useState("default")

    const toggleMode = () => {
        if (mode === "default") {
            setMode("test")
        } else {
            setMode("default")
        }
    }

    useEffect(() => {
        document.getElementsByClassName("menu").className = mode
    }, [mode])

    return (
        <header>
            <div className={`menu ${mode}`}>
                <div className="leftpart">
                    <Logo />
                    <Navigation />
                </div>
                <div className="rightpart">
                    <Account name="Sergey Karyakin" />
                    <Settings toggleMode={toggleMode} />
                </div>
            </div>
        </header>
    )
}

export default Header
