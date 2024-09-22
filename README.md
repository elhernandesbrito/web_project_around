
Projeto Sprint 9

A página, design EUA afora, possui dois formulários - popup.

Um formulário contendo dois campos a serem preenchidos com texto, e o outro com um cartão, contendo o texto e uma url.

Ambos os cartões passam por uma validação que acontece inicialmente no arquivo index.html,com a utilização de um atributo minlength e maxlength.

Todas as validações que já eram tratadas em Java Script, foram refatoradas para a Linguagem de Programação Objeto - POO.

Além das Classes Card e FormValidator, o projeto agora conta com classes que são responsável por cada função/ atribuição da página.

Sendo a classe Section.js responsável pela lógica de renderizar as imagens dentro da página e também de adicionar novos elementos a ela.

Também foi adicionado a classe Popup.js com métodos responsáveis pela abertura e fechamento dos formulários(popup). Nele também é criado os metodos que garantem o fechamento dos modais utilizando a tecla 'Esc' e o acionamento do 'click', fora do formulário.

Também foi explorado o conceito de herança, por meio das classes PopupWithForm.js e PopupWithImage.js.

Essas classes gerenciam o recebimento de imagens(PopupWithImage.js) e dos dados de texto contendo o nome e profissão. (PopupWithForm.js).

Uma outra classe responsável por renderizar dados também foi criada, mas a classe re renderizar os dados do formulário chamado "Profile", que é a classe UserInfor.js.

Para manter uma melhor organização,  estamos utilizando o arquivo utils.js, que é onde os seletores publicos são declarados.

Todas as classes e arquivo exportam suas funções, que estão sendo chamadas/ importadas dentro de index.js.

Dentro da classe index.js nós atribuímos as demais funções que colaboram e complementam com as demais classes.

Nesse sprint - 9, também estamos utilizando o empacotador Webapck, que foi baixado e configurado a  partir dessa nova etapa do projeto.

Além da configuração do webPack, também criamos o arquivo .gitignore, tendo em seu conteúdo o arquivos node_modules 
dist, como orientação ao git.


link no github: https://github.com/elhernandesbrito/web_project_around.git
