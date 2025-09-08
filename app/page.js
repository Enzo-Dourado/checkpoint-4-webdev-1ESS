"use client";

import { useState } from "react";
import NotesForm from "./components/NotesForm"

export default function Home() {
  const [notes, setNotes] = useState([])
  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };


  return (
    <>
     <div className="p-6 space-y-6">
      <NotesForm onAddNote={handleAddNote} nextId={notes.length + 1} />

      <div className="space-y-3">
        <h2 className="text-xl font-bold">Minhas Anotações</h2>
        {notes.length === 0 && <p>Nenhuma anotação ainda...</p>}
        {notes.map((note) => (
          <div key={note.id} className="p-4 border rounded-md bg-gray-50">
            <h3 className="font-semibold">{note.title}</h3>
            <p>{note.content}</p>
            <small className="text-gray-500">
              ID: {note.id} • Criado às {note.createdAt}
            </small>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
