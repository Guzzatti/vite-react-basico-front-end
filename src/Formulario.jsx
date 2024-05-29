import { useState } from 'react';

export function Formulario() {
  const [nome, setNome] = useState('Lucas');
  const [email, setEmail] = useState('lucas@burnweb.com.br');

  return (
    <form className="bg-gray-400 p-4 rounded-lg">
      <h2 className="text-red-700 text-xl font-bold">{nome}</h2>
      <button
        type="button"
        className="bg-blue-700 text-white font-semibold p-2 rounded mb-3.5"
        onClick={() => setNome('Pedro Paranhos')}
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
            value={nome}
            onChange={(event) => setNome(event.target.value)}
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
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="p-3 border border-radius border-gray-600 rounded w-64"
          />
        </div>
      </fieldset>
    </form>
  );
}
