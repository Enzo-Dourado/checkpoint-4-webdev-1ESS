"use client"

import { useState } from "react";
import NotesForm from "./components/NotesForm";
import Header from "./components/Header";
import NoteItem from "./components/NoteItem";

export default function Home() {
  const [notes, setNotes] = useState([]);

  // Função que sera passada para o NotesForm para adicionar uma nova nota
  const handleAddNote = (note) => {
    setNotes([note, ...notes]); // Adiciona a nova nota a lista de notas
  };

  return (
    <>
      <Header />
      <div className="p-6 space-y-6">
        <NotesForm onAddNote={handleAddNote} nextId={notes.length + 1} />
        
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt}
            onDetails={() => console.log("Detalhes da nota")}
            onRemove={() => console.log("Excluir a nota")}
          />
        ))}
      </div>
    </>
  );
}
