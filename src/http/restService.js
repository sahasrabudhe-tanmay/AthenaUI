const api = require('./restConfig').default;

export function loginUser(user, callback) {
    api.post('/user/login', user)
        .then(response => callback(response))
        .catch(error => console.log(error));
}

export function registerUser(user, callback) {
    api.post('/user/register', user)
    .then(response => callback(response))
    .catch(error => {
        console.log(error);
    });
}