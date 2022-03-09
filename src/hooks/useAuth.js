import useTokenContext from "./useTokenContext"
import {LOCAL_STORAGE_KEY} from "../constants/key";
import * as Api from "../api"

const useAuth = () => {
    const { setToken } = useTokenContext()

    const login = async (payload) => {
        const { data: token } = await Api.fetchLogin(payload)

        setToken(token)
        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, token)
    }

    return { login }
}

export default useAuth