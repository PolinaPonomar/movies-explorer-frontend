// сохранение фильмов и авторизация

export const BASE_URL = 'https://api.movies-explorer.ppol.nomoredomains.icu';

const checkResponse = (res) => {
    if(res.ok) {
        return res.json()
    } 
    return Promise.reject(`Ошибка: ${res.status}`) 
}

export const register = ({name, email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        } else if (res.status === 409) {
            return Promise.reject('Пользователь с таким email уже существует')
        }
        return Promise.reject('Что-то пошло не так! Попробуйте ещё раз :(')
    })
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject('Неправильный логин или пароль')
    })
};

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

export const setUserInfo = ({name, email}) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({name, email})
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

// на всякий случай
// export const updateAuthorizationToken = () => {
//     headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
//     console.log('я сработала', localStorage.getItem('jwt') );
// }
