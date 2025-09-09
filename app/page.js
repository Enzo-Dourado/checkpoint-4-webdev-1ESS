// app/page.jsx (Home)
"use client";

import { useState } from "react";
import NotesForm from "./components/NotesForm";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");

  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };

  const handleRemoveNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleDetails = (note) => {
    console.log("Detalhes:", note);
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
          onDetails={handleDetails}
        />
      </div>
    </>
  );
}
