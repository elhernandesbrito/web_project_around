
export default class UserInfo {
    
    constructor ({ nameSelector, profileSelector,avatarSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._profileElement = document.querySelector(profileSelector);
        this._avatarElement = document.querySelector(avatarSelector)
     
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profile: this._profileElement.textContent,
            avatar: this._avatarElement.src
        };
    }

    setUserInfo({name, profile, avatar}) {
        if(name) {
            this._nameElement.textContent = name;
        }
        if(profile) {
            this._profileElement.textContent = profile;
        }
        if (avatar) {
            this._avatarElement.src = avatar;
        }
    }

}