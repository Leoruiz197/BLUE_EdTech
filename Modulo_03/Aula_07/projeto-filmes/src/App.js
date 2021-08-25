import React from "react";
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      filmes: [
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
      ],
    };
  }
  render(){
    const  { filmes } = this.state;
    
    return (
      <div className="container">
        <h1>Meus Filmes</h1>
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
}