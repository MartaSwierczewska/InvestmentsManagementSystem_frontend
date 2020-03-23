
const API_BASE_URL = 'http://localhost:8080/api/investment';

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

export function sendCreatedInvestment(data){
    // console.log(data);
    return request({
        url: API_BASE_URL,
        method:'POST',
        body:JSON.stringify(data)
    });
}

export function deleteInvestment(id){
    return request({
        url: API_BASE_URL+'/'+id,
        method: 'DELETE'
    });
}

// export function getTodosHouse(houseName) {
//     return request({
//         url: API_BASE_URL,
//         method: 'GET'
//     });
// }

export function getImage(houseName) {
    return require(`../assets/houses/house1.jpg`);
}


