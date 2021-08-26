import React, { useState } from "react";
import './App.css';

export default function App() {
    // inicializa a declacao do estado do filme, juntamente com sua funcao de set (atualizacao) do estado.
    const [filmes, setFilmes] = useState([
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
    ]);

    // inicializa a declacao do estado dos inputs juntamente com suas funcoes de set (atualizacao) do estado.
    const [nomeFilme, setNomeFilme] = useState("");
    const [imagemUrlFilme, setImagemUrlFilme] = useState("");


    // método chamado no evento submit do formulario com o intuito de conter a regra para a adicao do filme
    // nesse caso usamos evento.prevent default para evitar o comportamento padrao do subimit
    // que seria recarregar a pagina quando clicar no botao e enviar o submit.
    const adicionaFilme = (e) => {
      e.preventDefault();
      console.log(nomeFilme);
      console.log(imagemUrlFilme);
    }

    return (
      // No input adicionamos um evento on change que é disparado a cada mudanca do formulario
      // ou seja para cada tecla que digitar no formulario envia a determinada funcao
      // no caso abaixo estamos pedindo para o on change chamar a funcao que atualiza o estado 'set'
      // e atribuir o valor do value do input no seu estado
      // já que o valor do value é o valor que o usuario digitou no input
      // precisamos atribuir a nossa variavel do estado no value para alem de refletir no input o que digitamos
      // atualizar tambem o valor do value no input.
      <div className="container">
        <h1>Meus Filmes</h1>
        <h2>Cadastre meu filme</h2>
        <form onSubmit={adicionaFilme}>
          <input placeholder="digite o nome do filme" 
          value={nomeFilme} 
          onChange={(evento) => {
            console.log(evento.target.value)
            setNomeFilme(evento.target.value)
          }}
          type="text"/>
          <br/>
          <input placeholder="digite a url da imagem" 
          value={imagemUrlFilme} 
          onChange={(evento) => {
            console.log(evento.target.value)
            setImagemUrlFilme(evento.target.value)
          }}
          type="text"/>
          <br/>
          <button type="submit">Salvar</button>
        </form>
        <ul>
          {filmes.map((f) => (
            <li key={f.id}>
              <h3>{f.nome}</h3>
              <img src={f.imagemUrl} alt={f.nome} />
            </li>
          ))}
        </ul>
      </div>
    );
}