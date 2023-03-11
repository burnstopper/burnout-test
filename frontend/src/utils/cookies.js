import Cookies from "js-cookie"

const CookieLib = {
    getCookieToken: () => {
        return Cookies.get("token")
    },
    setCookieToken: (token) => {
        Cookies.set("token", token, { expires: 365 })
    },
    removeCookie: () => {
        Cookies.remove("token", { expires: 365 })
    },
}

export default CookieLib
