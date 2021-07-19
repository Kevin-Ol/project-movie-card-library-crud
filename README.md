# Projeto Movie Cards Library CRUD

***
Você pode acessar o site no ar [aqui](https://kevin-ol.github.io/project-movie-card-library-crud/).

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Foram utilizadas as tecnologias HTML, CSS, Javascript e a biblioteca React.JS.

O objetivo do projeto foi consolidar os conhecimentos em ciclos de vida de componentes e manipulação de rotas usando React.JS.

Foi criada uma página com cards de filmes diferentes. Nela foi aplicado o conceito de SAP (Single Page Application), onde a página funciona inteiramente sem
a necessidade de fazer uma nova requisição HTML ao servidor, tornando a navegação mais fluída para o usuário. Também foi aplicado o conceito de CRUD (Create,
Read, Update, Delete), onde o usuário pode criar, visualizar, atualizar ou excluir informações.

A página inicial contém os cartões iniciais, onde em cada um deles há um botão "Ver Detalhes" que direciona para uma nova página, contendo mais informações sobre o 
filme e opções para editar ou deletar o card escolhido. Além disso na aplicação há um botão "Adicionar Cartão" que direciona o usuário à uma página de formulário
onde após serem inseridos os dados necessários, é gerado um novo cartão na página inicial. Entre cada solicitação há um pequeno carregamento que foi adicionado
com a finalidade de simular requisições à API.

***
Os requisitos que compõem projeto são:

:white_check_mark: Renderizar BrownserRouter no componente App usando rotas;

:white_check_mark: Fazer requisição para buscar e mostrar filmes quando o componente for montado;

:white_check_mark: Inserir link para a página de detalhes em cada cartão;

:white_check_mark: Fazer requisição para buscar e mostrar filme na página de detalhes;

:white_check_mark: Fazer requisição para buscar e mostrar filme na página de edição de filme;

:white_check_mark: Inserir link para adicionar novo filme na página inicial;

:white_check_mark: Adicionar função de deletar filme;

