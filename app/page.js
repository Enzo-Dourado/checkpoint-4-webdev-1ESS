"use client"

import { useRouter } from "next/navigation";
import Header from "./components/Header";
import NotesForm from "./components/NotesForm";
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };

  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleDetails = (note) => {
    // Redireciona para /notes/[id] passando os dados via query
    const queryParams = new URLSearchParams({
      title: note.title,
      content: note.content,
      createdAt: note.createdAt,
    }).toString();

    router.push(`/notes/${note.id}?${queryParams}`);
  };

  // Filtragem centralizada no Home
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase()) ||
      note.id.toString().includes(query) ||
      note.createdAt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="p-6 space-y-6">
        <NotesForm onAddNote={handleAddNote} nextId={notes.length + 1} />
        <SearchBar onSearch={setQuery} />
        <NotesList
          notes={filteredNotes}
          onRemove={handleRemoveNote}
          onDetails={handleDetails} // Passa a função atualizada
        />
      </div>
    </>
  );
}
