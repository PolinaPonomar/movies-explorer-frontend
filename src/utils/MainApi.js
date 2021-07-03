// сохранение фильмов и авторизация

export const BASE_URL = 'https://api.movies-explorer.ppol.nomoredomains.icu';

const checkResponse = (res) => {
    if(res.ok) {
        return res.json()
    } 
    return Promise.reject(`Ошибка: ${res.status}`) 
}

export const register = ({username, email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
    })
    .then(checkResponse)
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(checkResponse)
};

// export const getContent = (token) => { // нужно ли?
//     return fetch(`${BASE_URL}/users/me`, {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//         }
//     })
//     .then(checkResponse)
// };

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    })
    .then(checkResponse)
};

export const setUserInfo = ({username, email}) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({username, email})
    })
    .then(checkResponse)
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    })
    .then(checkResponse)
};

export const deleteSavedMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    })
    .then(checkResponse)
};