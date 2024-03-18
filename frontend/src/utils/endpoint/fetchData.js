import axios from 'axios'

export default function fetchData(method, endpoint, data) {
    return new Promise((resolve, reject) => {
        axios[method.toLowerCase()](
            endpoint,
            data
        )
        .then((response) => {
            return resolve(response)
        })
        .catch((err) => {
            return resolve(err.response)
        })
    }) 
}