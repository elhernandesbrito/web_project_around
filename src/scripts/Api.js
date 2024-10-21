export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
     }  

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers:this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Erro: ${res.status}`);
        })
        .catch(err=>console.error(err));
        }

        getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res =>res.ok? res.json(): Promise.reject(`Erro: ${res.status}`))
        .catch(err => console.error(err));
        }

        updateUserInfo(data) {
            return fetch(`${this._baseUrl}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Erro: ${res.status}`))
            .catch(err => console.error(err));
        }

        addNewCard(data) {
            return fetch(`${this._baseUrl}/cards`, {
                method:'POST',
                headers: this._headers,
                body:JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Erro: ${res.status}`))
            .catch(err => console.error(err));
        }

        deleteCard(cardId) {
            return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method:'DELETE',
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Erro: ${res.status}`))
            .catch(err => console.error(err));
        }

        likeCard(cardId) {
            return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers
            })
            .then(this._checkResponse);
        }

        unlikeCard(cardId) {
            return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._checkResponse);
        }

        _checkResponse(res) {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Erro: ${res.status}`);
        }

        updateAvatar(data) {
            return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                avatar: data.avatar
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Erro: ${res.status}`);
            })
            .catch(err => console.error(err));
        }
        
}

    

