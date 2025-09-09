import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(""); // Estado para armazenar o texto da busca

  // Função chamada a cada alteração no input
  function handleChange(e) {
    const value = e.target.value;
    setQuery(value); // Atualiza o estado local
    onSearch(value); // Chama a função recebida por props para filtrar as notas em tempo real
  }

  return (
    <div className="mb-4">
      {/* Campo de busca controlado */}
      <input
        type="text"
        value={query}                // Valor controlado pelo estado query
        onChange={handleChange}      // Atualiza o estado e dispara a busca
        placeholder="Buscar por título, conteúdo, ID ou data..."
        className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
