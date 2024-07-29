

export default class UserInfo {
    constructor ({ nameSelector, profileSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._profileElement = document.querySelector(profileSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profile: this._profileElement.textContent
        };
    }

    setUserInfo({name, profile}) {
        if(name) {
            this._nameElement.textContent = name;
        }
        if(profile) {
            this._profileElement.textContent = profile;
        }
    }

}