"use client"

import { useRouter } from "next/navigation";
import Header from "./components/Header";
import NotesForm from "./components/NotesForm";
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]); // Estado para armazenar todas as notas
  const [query, setQuery] = useState(""); // Estado para armazenar o texto da busca
  const router = useRouter(); // Hook para navegação programática do Next.js

  // Adiciona nova nota ao estado
  const handleAddNote = (note) => {
    setNotes([note, ...notes]); // Adiciona no início da lista
  };

  // Remove nota pelo ID
  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Redireciona para página de detalhes da nota
  const handleDetails = (note) => {
    const queryParams = new URLSearchParams({
      title: note.title,
      content: note.content,
      createdAt: note.createdAt,
    }).toString();

    router.push(`/notes/${note.id}?${queryParams}`);
  };

  // Filtra as notas com base na busca por título, conteúdo, ID ou data
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase()) ||
      note.id.toString().includes(query) ||
      note.createdAt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header /> {/* Cabeçalho da página */}
      <div className="p-6 space-y-6">
        {/* Formulário para criar novas notas */}
        <NotesForm onAddNote={handleAddNote} nextId={notes.length + 1} />

        {/* Barra de busca para filtrar notas */}
        <SearchBar onSearch={setQuery} />

        {/* Lista de notas filtradas */}
        <NotesList
          notes={filteredNotes}
          onRemove={handleRemoveNote}
          onDetails={handleDetails}
        />
      </div>
    </>
  );
}
