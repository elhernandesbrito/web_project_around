
export default class Api {
    constructor({baseUrl, headers, token}) {
        this._baseUrl = baseUrl,
        this._headers = headers,
        this._token = token
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json"
              }
        })
    }

    //outros metodos para trabalhar com API
}
