Projeto 7 - EUA AFORA

O desgin EUA AFORA é uma pagina interativa, que contém cartões com imagens diversas que indicam o que é a figura.

Nesse sprint, as imagens deixam de ser depositadas na página html e são buscadas por meio de funções no java script.

Cada cartão contém uma imagem, a indicação do que se trata, um link para curtir e um link para excluir.

A página possui um campo onde o usuário poderá incluir um novo elemento ao grupo dos cartões que estão sendo exibidos.

Cada uma das imagens ao serem selecionadas são destacadas isoladamente por meio de um display.

No desenvolvimento do projeto foi utilizado o html e ferramentas front-end: CSS e back-end: Java-Script (JS).

No HTML utilizamos colunas e formulário, displays para demonstração de "pop-up".

Os formulários são interativos.

O uso da tecnologia JS permite a captação e alteração dos dados inseridos nos formulários.

No Java Script captamos as variaveis HTML através do DOM - Document Object Modal, utilizando o metodo querySelector.

Os atributos das variáveis foram controlados e alterados por meio dos metodos addAdventListener, classList e  textContent.

Foram criadas funções que permite exibir e esconder o formulário  (popup/modal) ao ser clicado - "quando o evento click é acionado"

Os popup's foram explorados de diversas formas. Para captação e exibição de dados e imagens.
Também foram criadas funções que inserem e excluem imagens, seleciona (troca/toggle) objetos (como o "curtir"), e permite exibir imagens selecionadas em forma de "zoom".

Nessa etapa do projeto foram inseridos os metodos de validação, que permite capturar os dados inseridos no formulário e validar se os elementos atendendem os critérios. A validação é feita por meio do java script, com a resposta do próprio navegador.

Também foi atribuído a função de alteração do estado do botão enviar - function toggleButtonState que permanece desabilitada até a correta inserção do formulário.

Para uma melhor interação com o usuário, foi inserido a função Escapekey, que após aberto o formulário e havendo a digitação da tecla "escape", o mesmo é fechado.

Quando um dos formulários é aberto, ele também poderá ser fechado apenas com o click do mouse, se for identificado fora dos campos do 'input'.

Para a criação da página e execução da funções foram utilizadas os metodos: createElement, metodos de acionar como append e prepend;
Metodos de clonar elemento: cloneNode();
Objeto evento ou evt, como parâmetro de metodo e função.



link no github: https://github.com/elhernandesbrito/web_project_around.git



