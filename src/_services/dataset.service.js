import axios from 'axios';
import { authHeader } from '../_helpers';

export const datasetService = {
    getAllDataset,
};

function getAllDataset() {
 
    const headers = authHeader();
    return axios.get('http://localhost:8080/api/auth/users', { headers })
        .then(handleResponse)
        .then(response => {

                    return response;
                });;

    // const requestOptions = {
    //     // method: 'GET',
    //     headers: authHeader()
    // };

    // return fetch(`http://localhost:8080/api/auth/users`, requestOptions)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(res)
    //       handleResponse(res)
    //       return res;
    //     })
}


function handleResponse(response) {
    // return response.statusText().then(text => {
    //     const data = text && JSON.parse(text);
    //     if (!response.ok) {
    //         if (response.status === 401) {
    //             // auto logout if 401 response returned from api
    //             // logout();
    //             // location.reload(true);
    //         }

    //         const error = (data && data.message) || response.statusText;
    //         console.log("error", error)
    //         return Promise.reject(error);
    //     }

        
    // });
    if (response.status === 200) {
        return response.data;
    }       
}