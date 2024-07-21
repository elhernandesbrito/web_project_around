/*A classe UserInfo é responsável por renderizar a informação sobre o usuário na página. Esta classe deve:

    Pegar um objeto com os seletores de dois elementos no construtor: um contendo o nome do usuário 
    e o outro contendo o trabalho do usuário.
    Armazenar um método público chamado getUserInfo() que retorna um objeto com informação sobre o usuário. 
    Esse método será útil para casos em que é necessário exibir os dados do usuário no formulário aberto.
    Armazenar um método público chamado setUserInfo() que pega novos dados do usuário e adiciona na página.

*/

export default class UserInfo {
    constructor ({ nameSelector, profileSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._profileElement = document.querySelector(profileSelector);
    }
// Método público que retorna um objeto com informações do usuário
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            profile: this._profileElement.textContent
        };
    }

    // Método público que define novos dados do usuário e atualiza a página

    setUserInfo({name, profile}) {
        if(name) {
            this._nameElement.textContent = name;
        }
        if(profile) {
            this._profileElement.textContent = profile;
        }
    }

}