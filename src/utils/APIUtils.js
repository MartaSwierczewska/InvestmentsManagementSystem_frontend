import {API_BASE_URL, TODO_URL} from "../constants/Constants";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => response.json());
};

export function getAllHouses(){
    return request({
       url: API_BASE_URL,
       method: 'GET'
    });
}

export function getTodosHouse(houseName) {
    return request({
        url: API_BASE_URL+"/"+houseName+"/todos",
        method: 'GET'
    });
}

export function getImage(houseName) {
    return require(`../assets/houses/${houseName}.jpg`);
}

// export function upload(formData, houseName, id){
//     return request({
//         url: API_BASE_URL+'/'+houseName+'/'+id,
//         method: 'POST',
//         body: formData
//     }).then(res => {
//         if(res.ok) {
//             console.log(res.data);
//             alert("File uploaded successfully.")
//         }
//     });
// }