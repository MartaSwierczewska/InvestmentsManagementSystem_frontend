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
       url: TODO_URL,
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
    return require("../assets/dom.jpg")
    // try{
    //     return require(`../assets/projects/${itemName}.png`);
    // } catch(error){
    //     return require(`../assets/projects/site_frontend.png`);
    // }
}