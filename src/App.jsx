import { useState, useRef, useEffect } from 'react';

import { Titulo } from './Titulo';
import { Contador } from './Contador';

// se ela começar com letra minúscula
function soma(a, b) {
  return a + b;
}

function Resultado({ a, b }) {
  return (
    <p>
      <strong>=</strong> {soma(a, b)}
    </p>
  );
}

function Formulario() {
  const [formData, setFormData] = useState({
    nome: 'Lucas Ferreira',
    email: 'lucas@burnweb.com.br',
    idade: 37,
  });

  const [pessoas, setPessoas] = useState([]);

  function adicionaPessoa() {
    setPessoas([...pessoas, formData]);
    setFormData({
      nome: '',
      email: '',
      idade: 18,
    });
  }

  return (
    <>
      <form className="bg-gray-400 p-4 rounded-lg">
        <h2 className="text-red-700 text-xl font-bold">{formData.nome}</h2>
        <button
          type="button"
          className="bg-blue-700 text-white font-semibold p-2 rounded mb-3.5"
          onClick={() => setFormData({ ...formData, nome: 'Pedro Paranhos' })}
        >
          Pedro Paranhos
        </button>
        <fieldset>
          <div className="flex flex-col gap-1 mb-2">
            <label className="font-bold text-lg" htmlFor="nome">
              Seu nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={(event) =>
                setFormData({ ...formData, nome: event.target.value })
              }
              className="p-3 border border-radius border-gray-600 rounded w-64"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-lg" htmlFor="email">
              Seu e-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
              className="p-3 border border-radius border-gray-600 rounded w-64"
            />
          </div>
          <button
            type="button"
            className="bg-blue-700 text-white font-semibold p-2 rounded mt-3.5"
            onClick={() => adicionaPessoa()}
          >
            Cadastrar
          </button>
        </fieldset>
      </form>
      <ul className="flex flex-col gap-3 w-full p-4">
        {pessoas.map((pessoa) => (
          <li className="font-bold text-left border-l-4 border-red-600 pl-4">
            {pessoa.nome}
          </li>
        ))}
      </ul>
      <pre className="p-4 mt-3">{JSON.stringify(formData, null, 2)}</pre>
      <pre className="p-4 mt-3">{JSON.stringify(pessoas, null, 2)}</pre>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="p-6 text-xl mb-4">
      <h3>
        Valor do contador agora: {count} <br />
        Valor do contador antes: {prevCountRef.current}
      </h3>
      <button
        className="bg-blue-700 text-white font-semibold p-2 rounded mt-3.5"
        onClick={() => setCount(count + 1)}
      >
        Somar um ao contador
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="mb-12 flex flex-col items-center justify-center">
        <Titulo text="Título 1" />
        <p>Teste de texto abaixo do título</p>
        <Resultado a={2} b={3} />
      </div>
      <Counter />
      <Contador />
      <Formulario />
    </div>
  );
}

export default App;
