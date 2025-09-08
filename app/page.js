
"use client";

import { useState } from "react";
import NotesForm from "./components/NotesForm"

import Header from "./components/Header";


export default function Home() {
  const [notes, setNotes] = useState([])
  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };


  return (
    <>

     <div className="p-6 space-y-6">
      <Header />
      <NotesForm onAddNote={handleAddNote} nextId={notes.length + 1} />
     </div>
      
    </>
  );
}
