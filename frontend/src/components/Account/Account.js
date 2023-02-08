import React from "react"
import "./Account.css"

const Account = ({ name }) => {
    return <label className="username">Пользователь: {name}</label>
}

export default Account
