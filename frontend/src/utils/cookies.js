import Cookies from "js-cookie"

const CookieLib = {
    getCookieToken: () => {
        return Cookies.get("token")
    },
    setCookieToken: (token) => {
        Cookies.set("token", token, { expires: 365, secure: true })
    },
    removeCookie: () => {
        Cookies.remove("token", { secure: true })
    },
}

export default CookieLib
