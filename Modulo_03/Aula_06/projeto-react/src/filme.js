import { useState } from "react";
import "./App.css";

export default function Home() {
  const [filmes, setFilmes] = useState([
    {
      nome: "Capitão América: O primeiro vingador",
      imagemUrl:
        "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
    },
    {
      nome: "Capitã Marvel",
      imagemUrl:
        "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
    },
    {
      nome: "O incrivel Hulk",
      imagemUrl:
        "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
    },
    {
      nome: "Homem de Ferro",
      imagemUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
    },
    {
      nome: "Homem de Ferro 2",
      imagemUrl:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9a/Homem_de_Ferro_2_-_Poster.jpg/250px-Homem_de_Ferro_2_-_Poster.jpg",
    },
  ]);
  const [nomeFilme, setNomeFilme] = useState("");
  const [imagemUrlFilme, setImagemUrlFilme] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setFilmes([
      ...filmes,
      {
        nome: nomeFilme,
        imagemUrl: imagemUrlFilme,
      },
    ]);
    setNomeFilme("");
    setImagemUrlFilme("");
  };

  const deletar = (index) => {
    setFilmes(filmes.filter((f, i) => i !== index));
  };

  return (
    <div className="container">
      <main className="main">
        <h1>Filmes</h1>
        <hr />
        <h2>Cadastre um novo Filme</h2>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Nome"
            value={nomeFilme}
            onChange={(e) => {
              setNomeFilme(e.target.value);
            }}
          />
          <br />
          <input
            placeholder="Url da Imagem"
            value={imagemUrlFilme}
            onChange={(e) => {
              setImagemUrlFilme(e.target.value);
            }}
          />
          <br />
          <button type="submit">Salvar</button>
        </form>
        <hr />
        <h2>Filmes</h2>
        <ul>
          {filmes.map((f, index) => (
            <li key={index}>
              <h3>{f.nome}</h3>
              <img src={f.imagemUrl} alt={f.nome}/>
              <br />
              <button onClick={() => deletar(index)}>Deletar</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}