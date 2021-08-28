import React, { useState, useEffect } from 'react';

export default function App() {
  // criacao do estado da lista de contatos
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
  
  // estado responsavel pelo input nome
  const [nomeContato, setNomeContato] = useState("");

  // estado responsavel pelo input telefone
  const [telefoneContato, setTelefoneContato] = useState("");

  // estado responsavel a informar ao sistema o modo de edicao
  const [editando, setEditando] = useState(false);

  // estado responsavel há obter o indice do contato que deve ser editado
  const [indiceEditando, setIndiceEditando] = useState(null);

  useEffect(() => {
    // se estou no indice e estou em modo de edicao entro no if
    if((indiceEditando !== null) && editando) {
      // apos verificar que possui indice de edicao e contem modo de contato
      // atualiza o estados dos inputs com o nome e telefone do item que deseja editar
      setNomeContato(contatos[indiceEditando].nome)
      setTelefoneContato(contatos[indiceEditando].telefone)
    }
  }, [indiceEditando])


  // responsavel por atualizar o estado nome de acordo com as alteracoes
  const handleNameChange = (evento) => {
    setNomeContato(evento.target.value);
  }

  // responsavel por atualizar o estado telefone de acordo com as alteracoes
  const handleTelChange = (evento) => {
    setTelefoneContato(evento.target.value);
  }


  // responsavel pelo cadastro e edicao de um novo contato
  const handleSubmit = (evento) => {
    evento.preventDefault();
    // verifica se esta em modo de edicao
    if(editando) {
      const contatosAtualizados = contatos.map((contato, indice) => {
        // se encontrar um indice no map igual ao indice que deseja editar
        // atualiza os dados desse objeto e depois retorna ele para o array
        if(indiceEditando === indice) {
          contato.nome = nomeContato;
          contato.telefone = telefoneContato;
        }
        return contato
      });

      // atualiza o estado dos contatos com a nova lista atualizada
      setContatos(contatosAtualizados);

      // desativa o modo de edicao
      setEditando(false);

      // limpa o indice do elemento que seria editado
      setIndiceEditando(null);
    } else {
      // caso nao estiver em modo de edicao, adiciona o contato na lista
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
  }


  // filtra os elementos de acordo com o indice recebido via funcao
  // e so retorna os que forem diferente do indice passado
  const handleDelete = (indice) => {
    setContatos(contatos.filter((contato, indiceContato) => indice == indiceContato))
  };

  return (
    <div>
      <h1>Contatos</h1>
      <h2>Cadastre um novo contato</h2>
      {/* {nomeContato}
      {telefoneContato} */}
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
            <button type="button" onClick={() => handleDelete(indice) }>Excluir</button>
            <button type="button" onClick={() => {
              setEditando(true);
              setIndiceEditando(indice);
            }}>Editar</button>
          </li>
        ))}

        {/* Mostra a chave do objeto de forma indivudal de acordo com o indice do array */}
        {/* {contatos[1].nome}
        {contatos[1].telefone} */}
      </ul>
    </div>
  )
}