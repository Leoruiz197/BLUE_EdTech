import React, { useState, useEffect } from 'react';

export default function ExemploFuncao() {
  const [count, setCount] = useState(0);

  // use effect aceita 2 parametros - primeiro a funcao que vai ser executada, e depois qual variavel ele precisa analisar o comportamento.
  useEffect(() => {
    document.title = count;
  }, [count])

  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Adiciona</button>
    </div>
  )
}