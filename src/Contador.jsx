import { useState, useEffect } from 'react';

import { Titulo } from './Titulo';

export function Contador() {
  const [count, setCount] = useState(null);

  const incrementarCount = () => setCount(count + 1);

  const decrementarCount = () => setCount(count - 1);

  useEffect(() => {
    if (count !== null) {
      localStorage.setItem('count', JSON.stringify(count));
    }
  }, [count]);

  useEffect(() => {
    let _count = localStorage.getItem('count');
    if (_count) {
      _count = JSON.parse(_count);
      setCount(_count);
    } else {
      setCount(1);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <Titulo
        text={
          <span>
            Contagem <em className="bg-gray-300 p-1 rounded">{count}</em>
          </span>
        }
      />
      {count >= 8 ? <p>Calma lá clicadorzinho</p> : null}
      <div className="flex gap-2">
        <button
          className="mt-4 text-white bg-gray-700 px-4 py-3 rounded-md font-bold disabled:opacity-50"
          type="button"
          onClick={() => incrementarCount()}
          disabled={count >= 10}
        >
          Incrementar
        </button>
        <button
          className="mt-4 text-white bg-gray-700 px-4 py-3 rounded-md font-bold disabled:opacity-50"
          type="button"
          onClick={() => decrementarCount()}
          disabled={count === 0}
        >
          Diminói
        </button>
      </div>
    </div>
  );
}
