// export const getSite = (success, fail, data) => {
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         redirect: 'follow',
//         body: JSON.stringify(data),
//     };

//     fetch(`${API_URL}${API_PATH_REGISTER}`, requestOptions)
//         .then(response => {
//             if (response.status >= 400 && response.status < 600) {
//                 throw new Error(response.status);
//             } else {
//                 return response.json()
//             }
//         })
//         .then((result) => {
//             return success(result);
//         })
//         .catch(error => {
//             fail(error);
//         })
// }

const API_URL = "https://y89znoo4p5.execute-api.us-east-1.amazonaws.com/prod";

export const getSite = () => {
    console.log('hi!!')
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
    };

    fetch(`${API_URL}/site?id=jessysorchard`, requestOptions)
        .then(response => {
            console.log('resp', response)
            if (response.status >= 400 && response.status < 600) {
                throw new Error(response.status);
            } else {
                return response.json()
            }
        })
        .then((result) => {
            console.log(result)
            return result;
        })
        .catch(error => {
            console.log("error: ", error);
        })
}