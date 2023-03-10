import React from "react"
import "./Account.css"

const transformString = (str) => {
    if (str?.length <= 8) {
        return str
    } else {
        return str.substring(0, 4) + "..." + str.substring(str.length - 4)
    }
}

const Account = ({ name }) => {
    return (
        <label className="username">
            {name && name !== "undefined" ? (
                <> Пользователь: {transformString(name)}</>
            ) : (
                <>Пользователь: </>
            )}
        </label>
    )
}

export default Account
