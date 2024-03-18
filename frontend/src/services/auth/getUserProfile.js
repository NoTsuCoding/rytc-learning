import * as endpoint from '../../utils/endpoint'

const Host = endpoint.config.HOST
const userProfileEndpoint = endpoint.config.ENDPOINTS.GET_PROFILE

export async function getProfile(accessToken) {
    return await endpoint.fetchData(
        userProfileEndpoint.METHOD,
        Host + userProfileEndpoint.PATH,
        {headers: {
            'Authorization': accessToken
        }}
    )
}