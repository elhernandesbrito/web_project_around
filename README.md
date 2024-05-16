
Projeto Sprint 8

A página, design EUA afora, possui dois formulários - popup.

Um formulário contendo dois campos a serem preenchidos com texto, e o outro com um cartão, contendo o texto e uma url.

Ambos os cartões passam por uma validação que acontece inicialmente no arquivo index.html,com a utilização de um atributo minlength e maxlength.

Nesse sprint-8, as validações que já eram tratadas em Java Script, são refatoradas para a Linguagem de Programação Objeto - POO.

Com a refatoração, duas classes/arquivos são criados.

Sendo eles: Card.js e FormValidator.js

A classe Card.js recebe em seu construtor todos os elementos que compoem um cartão, os ouvintes de chamada relacionados a esses elementos e suas funções.

É também nessa classe que é inserido o generateCard(), função responsável por retornar todos os elementos desse cartão.

A outra classe criada é a FormValidator,que recebe como parâmetro todos os formulários contemplados no projeto e os elementos/inputs que devem ser validados.

Também é nessa classe encontra-se as funções que adicionam ou retiram as mensagens de erros e validam esses erros. Após a checagem, é chamado a função enableValidation() onde ocorre a etapa final de validação.

Todas as funções ja criadas anteriormentes sao distribuidas entre os arquivos utils.js e index.js.

Nesse sprint, são explorados os seguintes assuntos:

Criação de classe e passagem de parâmetros,
refatoração de funções em POO,
utilização de objetos para configuração (config)



link no github: https://github.com/elhernandesbrito/web_project_around.git
