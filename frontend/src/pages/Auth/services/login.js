import * as endpoint from '../../../utils/endpoint'

const Host = endpoint.config.HOST
const loginEndpoint = endpoint.config.ENDPOINTS.LOGIN

async function login(username, pwd) {
    return await endpoint.fetchData(
        loginEndpoint.METHOD,
        Host + loginEndpoint.PATH,
        {params : {username, pwd}}
    )
}

export default login