const API_BASE_INVESTMENT_URL = 'http://localhost:8080/api/house';
const API_BASE_TODO_URL = 'http://localhost:8080/api/todo';
const API_BASE_URL = 'http://localhost:8080/api';

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
       url: API_BASE_INVESTMENT_URL,
       method: 'GET'
    });
}

export function sendCreatedInvestment(data){
    return request({
        url: API_BASE_INVESTMENT_URL,
        method:'POST',
        body:JSON.stringify(data)
    });
}

export function deleteInvestment(id){
    return request({
        url: API_BASE_INVESTMENT_URL+'/'+id,
        method: 'DELETE'
    });
}

export function getAllTodos(){
    return request({
        url: API_BASE_TODO_URL,
        method: 'GET'
    });
}

export function sendDefaultTodo(data){
    return request({
        url: API_BASE_TODO_URL,
        method:'POST',
        body:JSON.stringify(data)
    });
}

export function sendSpecificInvestmentTodo(data, investmentId){
    return request({
        url: API_BASE_INVESTMENT_URL+'/'+investmentId+'/todo',
        method:'POST',
        body:JSON.stringify(data)
    });
}

export function getTodosHouse(investmentId) {
    return request({
        url: API_BASE_INVESTMENT_URL+'/'+investmentId+'/todos',
        method: 'GET'
    });
}

export function sendUpdatedTodos(todos,investmentId){
    return request({
        url:API_BASE_INVESTMENT_URL+'/'+investmentId,
        method:'POST',
        body:JSON.stringify(todos)
    });
}

export function getImage(houseName) {
    return require(`../assets/houses/house1.jpg`);
}


//-------------------------------------------------


export function downloadFile(houseId, id){
    return request({
        url: API_BASE_URL+'/'+houseId+'/'+id,
        method:'GET'
    });
}

export function uploadFileToServer(idGeneral, data){
    return request({
        url:API_BASE_URL+'/'+idGeneral,
        method:'POST',
        body:data //chyba juz jest dobry format
    });
}






