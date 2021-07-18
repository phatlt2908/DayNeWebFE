import axios from "../axios"
import apiConst from "../constants/apiConst"

class api {
    login(data) {
        return axios.post(apiConst.LOGIN, data)
    }

    register(data) {
        return axios.post(apiConst.REGISTER, data)
    }

    checkUsername(username) {
        return axios.get(apiConst.CHECK_USERNAME, { params: { username: username } })
    }

    checkEmail(email) {
        return axios.get(apiConst.CHECK_EMAIL, { params: { email: email } })
    }

    getIp() {
        return axios.get("https://api.ipify.org")
    }
}

export default new api()