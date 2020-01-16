import {API_BASE_URL, STATISTICS_URL} from "../constants/Constants";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => response.json());
};

export function getAllPercentsOfDoneTodos() {
    return request({
        url: STATISTICS_URL,
        method: 'GET'
    });
}

export function getAllHouses(){
    return request({
       url: API_BASE_URL+"/all",
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

export function getDatesOfAllTodos(){
    return request({
        url: STATISTICS_URL+"/datetimes",
        method: 'GET'
    });
}
