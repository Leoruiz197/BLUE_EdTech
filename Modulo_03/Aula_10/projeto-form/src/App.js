import React, { useState } from 'react';

export default function App() {
  const [contatos, setContatos] = useState([
    {
      nome: 'ivonaldo',
      telefone: '99999999'
    },
    {
      nome: 'ana',
      telefone: '99824687'
    },
    {
      nome: 'maria',
      telefone: '6987135987'
    }
  ])

  const [nomeContato, setNomeContato] = useState("");
  const [telefoneContato, setTelefoneContato] = useState("");

  const handleNameChange = (evento) => {
    setNomeContato(evento.target.value);
  }

  const handleTelChange = (evento) => {
    setTelefoneContato(evento.target.value);
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log('submit');
    setContatos([
      ...contatos,
      {
        nome: nomeContato,
        telefone: telefoneContato,
      }
    ]);
    setNomeContato("");
    setTelefoneContato("");
  }

  const handleDelete = () => {
    console.log('deve excluir');
  }

  return (
    <div>
      <h1>Contatos</h1>
      <h2>Cadastre um novo contato</h2>
      {nomeContato}
      {telefoneContato}
      <form onSubmit={handleSubmit}>
        <label>Digite o nome:</label>
        <input type="text" value={nomeContato} onChange={handleNameChange}/>
        <br/>
        <label>Digite o telefone:</label>
        <input type="" value={telefoneContato} onChange={handleTelChange}/>
        <br/>
        <button type="submit">Salvar</button>
      </form>
      <ul>
        {contatos.map((contato, indice) => (
          <li key={indice}>
            <p>
              { contato.nome }
            </p>
            <p>
              { contato.telefone }
            </p>
            <button type="button" onClick={handleDelete}>Excluir</button>
          </li>
        ))}

        {/* Mostra a chave do objeto de forma indivudal de acordo com o indice do array */}
        {/* {contatos[1].nome}
        {contatos[1].telefone} */}
      </ul>
    </div>
  )
}