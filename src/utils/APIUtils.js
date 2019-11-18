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

export function getAllTodos(){
    return request({
       url: TODO_URL+"/all",
       method: 'GET'
    });
}

export function getAllHouses() {
    return request({
        url: API_BASE_URL,
        method: 'GET'
    });
}

export function getImage(itemName) {
    return require(`../assets/houses/house1.jpg`);
}