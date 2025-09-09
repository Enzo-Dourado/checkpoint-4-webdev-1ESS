// components/NotesList.jsx
"use client";

import NoteItem from "./NoteItem";

export default function NotesList({ notes, onRemove, onDetails }) {
  return (
    <div className="space-y-4 mt-6">
      {notes.length === 0 ? (
        <p className="text-gray-500">Nenhuma anotação encontrada.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt}
            onDetails={() => onDetails(note)}
            onRemove={() => onRemove(note.id)}
          />
        ))
      )}
    </div>
  );
}
