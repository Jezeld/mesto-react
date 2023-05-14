

class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInfo() {
        // console.log('getProfile')
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            // .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            // .catch(console.log)
            .then(this._checkResponse)
    }

    getInitialCards() {
        // console.log('getProfile')
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            // .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
            // .catch(console.log)
            .then(this._checkResponse)
    }

    changeUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
                // name: 'Marie Skłodowska Curie',
                // about: 'Physicist and Chemist'
            })
        })
            .then(this._checkResponse)
    }

    addNewCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(this._checkResponse)
    }

    deleteCard(cardid) {
        return fetch(`${this._baseUrl}/cards/${cardid}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    deleteLike(cardid) {
        return fetch(`${this._baseUrl}/cards/${cardid}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    addLike(cardid) {
        return fetch(`${this._baseUrl}/cards/${cardid}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    changeAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            }),
        })
            .then(this._checkResponse)
    }
}


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '141f19a7-2a64-4734-9dd2-fa8ceaaaa66b',
        'Content-Type': 'application/json'
    }
});

export { api };