const API_BASE_INVESTMENT_URL = 'http://localhost:8080/api/house';
const API_BASE_TODO_URL = 'http://localhost:8080/api/todo';
const LOGIN_URL = 'http://localhost:8080/api/login';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    const defaults = {headers: headers,credentials: 'same-origin'};
    options = Object.assign({}, defaults, options);


    return fetch(options.url, options)
        .then(response => response.json());
};

const request2 = (options) => {
    const defaults = {credentials: 'same-origin'};
    options = Object.assign({}, defaults, options);


    return fetch(options.url, options);
};

export function getAllHouses(){
    return request({
       url: API_BASE_INVESTMENT_URL + '/all',
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        method: 'GET'
    });
}

export function checkLoginCredentials(username, password ){
    return request({
        url: LOGIN_URL,
        method:'POST',
        body: JSON.stringify({
            username:username,
            password:password
        })
    });
}

// auth
export function sendCreatedInvestment(data){
    return request({
        url: API_BASE_INVESTMENT_URL,
        method:'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        body:JSON.stringify(data)
    });
}

// auth
export function deleteInvestment(id){
    return request({
        url: API_BASE_INVESTMENT_URL+'/'+id,
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        method: 'DELETE'
    });
}

export function getAllTodos(){
    return request({
        url: API_BASE_TODO_URL,
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        method: 'GET'
    });
}

export function sendDefaultTodo(data){
    return request({
        url: API_BASE_TODO_URL,
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        method:'POST',
        body:JSON.stringify(data)
    });
}

// auth
export function sendSpecificInvestmentTodo(data, investmentId){
    return request({
        url: API_BASE_INVESTMENT_URL+'/'+investmentId+'/todo',
        method:'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        body:JSON.stringify(data)
    });
}

export function getTodosHouse(investmentId) {
    return request({
        url: API_BASE_INVESTMENT_URL+'/'+investmentId+'/todos',
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        method: 'GET'
    });
}

export function sendUpdatedTodos(todos,investmentId){
    return request({
        url:API_BASE_INVESTMENT_URL+'/'+investmentId,
        headers: {'Content-Type': 'application/json', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        method:'POST',
        body:JSON.stringify(todos)
    });
}

export function getImage(houseName) {
    return require(`../assets/houses/${houseName}`);
}


export function downloadDocument(id){
    return request2({
        url: API_BASE_INVESTMENT_URL+'/document/'+id,
        headers: {'Content-Type': 'blob', 'Authorization': `Basic ${localStorage.getItem('token')}`},
        responseType: 'blob',
        method:'GET'
    });
}

export function uploadFileToServer(generalId, data){
    return request({
        url:API_BASE_INVESTMENT_URL+'/document/'+generalId,
        headers: {'Authorization': `Basic ${localStorage.getItem('token')}`},
        method:'POST',
        body:data
    });
}

export function removeTodoFromHouse(id){
    return request({
        url:API_BASE_INVESTMENT_URL+'/'+id+'/todo',
        headers: {'Authorization': `Basic ${localStorage.getItem('token')}`},
        method:'DELETE'
    });
}







