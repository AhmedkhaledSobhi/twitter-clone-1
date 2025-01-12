import Cookies from "js-cookie";

type CookieKey = "access" | "refresh"

type Token = {
    access_token: string,
    refresh_token: string,
    expires_in: number,
}

export default function useToken() {
    const calcTokenAge = (age: number) => new Date(new Date().getTime() + age * 60)
    const REFRESH_TOKEN_AGE = 365;

    const setToken = (token: Token) => {
        Cookies.set("access_token", token.access_token, {
            secure: true,
            sameSite: "lax",
            expires: calcTokenAge(token.expires_in)
        })

        Cookies.set("refresh_token", token.refresh_token, {
            secure: true,
            expires: REFRESH_TOKEN_AGE,
            sameSite: "lax"
        })
    }

    function getToken(cookieKey: CookieKey) {
        return Cookies.get(`${cookieKey}_token`)
    }

    return {setToken, getToken};
}
