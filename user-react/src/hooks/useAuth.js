import useToken from "./useToken";
import axios from "../apiProvider/axios";

export type Credentials = {
    username: string | boolean,
    password: string | boolean,
}

function useAuth() {
    const {setToken} = useToken();
    const loginController = new AbortController();

    const login = async (credentials: Credentials) => {
        const response = await axios.post("/auth/token", {
            grant_type: "password",
            username: credentials.username,
            password: credentials.password,
            client_id: process.env.REACT_APP_API_ID,

        }, {signal: loginController.signal});

        if (response.status === 200) {
            setToken(response?.data)
        }
        return response;
    };

    return {login, loginController}
}


export default useAuth;

