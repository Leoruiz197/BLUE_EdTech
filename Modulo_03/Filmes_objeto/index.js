const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

// Transformando a lista de strings em uma lista de Objetos
const filmes = [
  {
    id: 1,
    nome: "Capitão América: O primeiro vingador",
    imagemUrl:
      "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
  },
  {
    id: 2,
    nome: "Capitã Marvel",
    imagemUrl:
      "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
  },
  {
    id: 3,
    nome: "O incrivel Hulk",
    imagemUrl:
      "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
  },
  {
    id: 4,
    nome: "Homem de Ferro",
    imagemUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
  },
  {
    id: 5,
    nome: "Homem de Ferro 2",
    imagemUrl:
      "https://media.fstatic.com/SFp4c8GT3GTGYok7_526qDSHTns=/290x478/smart/media/movies/covers/2018/09/66432b37ed80464274a58239b695007f95c79155.jpg",
  },
];

//Funções de validação dos filmes

const getFilmesValidos = () => filmes.filter(Boolean);

const getFilmeById = (id) =>
  getFilmesValidos().find((filme) => filme.id === id);

const getFilmeIndexById = (id) =>
  getFilmesValidos().findIndex((filme) => filme.id === id);

// [GET] / - Home
app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

// [GET] /filmes - Retorna a lista de filmes
app.get("/filmes", (req, res) => {
  res.send(getFilmesValidos());
});

// [GET] /filmes/{id} - Retorna apenas um único filme pelo ID
app.get("/filmes/:id", (req, res) => {
  const id = +req.params.id;
  const filme = getFilmeById(id);

  // Validação dos filmes

  if (!filme) {
    res.send("Filme não encontrado.");

    return;
  }

  res.send(filme);
});

// [POST] - /filmes - Cria um novo filme
// - Adaptando para funcionar com lista de Objetos
app.post("/filmes", (req, res) => {
  const filme = req.body;

  // Validação

  if (!filme || !filme.nome || !filme.imagemUrl) {
    res.status(400).send({
      message:
        'Filme inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
    });

    return;
  }

  // Pega o último elemento da lista filmes
  const lastFilme = filmes[filmes.length - 1];

  // Testa se a lista não está vazia
  if (filmes.length) {
    // Pega o valor do ultimo ID disponivel e soma 1
    filme.id = lastFilme.id + 1;
    filmes.push(filme);
  } else {
    // Caso a lista esteja vazia o valor do id é 1
    filme.id = 1;
    filmes.push(filme);
  }

  res.send(filme);
});

// [PUT] - /filmes/{id} - Atualiza um filme pelo ID
// - Adaptando para funcionar com lista de Objetos
app.put("/filmes/:id", (req, res) => {
  const id = +req.params.id;

  const filmeIndex = getFilmeIndexById(id);

  // Validação

  if (filmeIndex < 0) {
    res.status(404).send({
      message: "O filme que você está tentando editar não foi encontrado.",
    });

    return;
  }

  const novoFilme = req.body;

  if (!Object.keys(novoFilme).length) {
    res.status(400).send({ message: "O body da requisição está vazio." });

    return;
  }

  if (!novoFilme || !novoFilme.nome || !novoFilme.imagemUrl) {
    res.status(400).send({
      message:
        'Filme inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
    });

    return;
  }

  const filme = getFilmeById(id);

  //Spread Operator

  filmes[filmeIndex] = {
    ...filme,
    ...novoFilme,
  };

  res.send(filmes[filmeIndex]);
});

// [Delete] - /filmes{id} - Remover um filme pelo ID
app.delete("/filmes/:id", (req, res) => {
  const id = +req.params.id;

  const filmeIndex = getFilmeIndexById(id);

  // Validação

  if (filmeIndex < 0) {
    res.status(404).send({
      message: "O filme que você está tentando editar não foi encontrado.",
    });

    return;
  }

  filmes.splice(filmeIndex, 1); // Para apagar efetivamente o conteúdo

  res.send({ message: "Filme excluído com sucesso" });
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
