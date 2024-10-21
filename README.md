
Projeto Sprint 10

A página, design EUA afora, possui dois formulários que são usados para alimentar os dados profissionais e cartão.

Um formulário contendo dois campos a serem preenchidos com texto - profissional, e o outro com um cartão, contendo o texto e uma url.

Ambos os cartões passam por uma validação que acontece inicialmente no arquivo index.html,com a utilização de um atributo minlength e maxlength.

Todas as validações que já eram tratadas em Java Script, foram refatoradas para a Linguagem de Programação Objeto - POO.

Além das Classes Card e FormValidator, o projeto agora conta com classes que são responsáveis por cada função/ atribuição da página.

Sendo a classe Section.js responsável pela lógica de renderizar as imagens dentro da página e também de adicionar novos elementos a ela.

Também foi adicionado a classe Popup.js com métodos responsáveis pela abertura e fechamento dos formulários(popup). Nele também é criado os metodos que garantem o fechamento dos modais utilizando a tecla 'Esc' e o acionamento do 'click', fora do formulário.

Nesse projeto também foi explorado o conceito de herança, por meio das classes PopupWithForm.js e PopupWithImage.js.

Essas classes gerenciam o recebimento de imagens(PopupWithImage.js) e dos dados de texto contendo o nome e profissão. (PopupWithForm.js).

Uma outra classe responsável por renderizar dados da classe Profile também foi criada, que é a UserInfor.js.

Para manter uma melhor organização,  estamos utilizando o arquivo utils.js, que é onde os seletores publicos são declarados.

Todas as classes e arquivo exportam suas funções, que estão sendo chamadas/ importadas dentro de index.js.

Dentro da classe index.js nós atribuímos as demais funções que colaboram e complementam com as demais classes.

O projeto contempla a utilização do empacotador Webapck, que foi baixado e configurado a  partir da versão anterior do projeto.

Além da configuração do webPack, também criamos o arquivo .gitignore, tendo em seu conteúdo o arquivos node_modules 
dist, como orientação ao git.

Na etapa mais recente, o projeto começa a se conectar ao servidor, por meio de um API.

As solicitações feitas ao servidor por meio da API se utilizam de um TOKEN  e o id.

Por meio da API nós configuramos o carregamento e adição de cartões, os metodos de curtir, excluir, editar perfil, e atualizar foto.

As solicitações são realizadas por meio do método PATH, GET, POST, DELET E PUT.

O projeto conta também com as funções responsáveis por contabilizar a quantidade de curtidas, e a notificação que exibe ao usuário sobre o processo de "upload".

O botão de salvar, recebe temporariamente através de uma função "renderLoading" a mensagem 'Salvando...'.


link no github: https://github.com/elhernandesbrito/web_project_around.git
