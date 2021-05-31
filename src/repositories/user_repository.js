import { api, apiAuth } from "../services/api"
import { localLogin } from "../services/auth"

const doLogin = async ({ email, password, remember }) => {

    let response = await api.post('/auth/login', {
        email,
        password
    })

    if (response.status == 200) {
        let res = response.data;

        if (res.success) {
            let result = res.data;
            console.log(result);
            let logged = await localLogin(result.user, result.access_token, result.expires_in, remember);
            return logged;
        }
        return false;
    }
    return false;
}

const getCounts = async () => {
    let response = await apiAuth.get('/user/counts');

    return response.data;
}

export { doLogin, getCounts }