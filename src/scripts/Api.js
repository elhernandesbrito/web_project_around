export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
     }

// Método para obter os dados dos cards

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
        .catch(err => console.error(err));
    } 
}