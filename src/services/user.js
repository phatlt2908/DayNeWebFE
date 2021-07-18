import axios from "../axios"

class user {

    constructor() {
        let user = localStorage.getItem("user")
        user = user ? JSON.parse(user) : null
        this.logged = user ? user.logged : false
        this.accessToken = user ? user.accessToken : null
        this.username = user ? user.username : null
        this.email = user ? user.email : null
    }

    setLogged(data) {
        if (data) {
            let accessToken = data.token
            if (!accessToken.startsWith('Bearer ')) {
                accessToken = 'Bearer ' + accessToken
            }
            axios.defaults.headers.common['authorization'] = accessToken
            this.accessToken = accessToken
            this.logged = true

            console.log("data >>> ", data);

            let user = {
                accessToken: data.token,
                username: data.user.username,
                email: data.user.email,
                logged: true
            }
            localStorage.setItem("user", JSON.stringify(user))
        }
    }

    clearLogged() {
        delete axios.defaults.headers.common["authorization"]
        this.accessToken = null
        this.username = null
        this.email = null
        this.logged = false
    }

    islogged() {
        return this.logged
    }

    getData() {
        return {
            logged: this.logged,
            accessToken: this.accessToken,
            username: this.username,
            email: this.email
        }
    }

    getAccessToken() {
        return this.accessToken
    }

    getUsername() {
        return this.username
    }
}

export default new user()