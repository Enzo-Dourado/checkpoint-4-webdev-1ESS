"use client";

import NoteItem from "./NoteItem";

export default function NotesList({ notes, onRemove, onDetails }) {
  return (
    <div className="space-y-4 mt-6">
      {/* Se não houver notas, exibe mensagem */}
      {notes.length === 0 ? (
        <p className="text-gray-500">Nenhuma anotação encontrada.</p>
      ) : (
        // Se houver notas, mapeia cada uma para o componente NoteItem
        notes.map((note) => (
          <NoteItem
            key={note.id}               // Chave única para cada item da lista
            title={note.title}           // Título da nota
            content={note.content}       // Conteúdo da nota
            createdAt={note.createdAt}   // Data/hora de criação
            onDetails={() => onDetails(note)} // Função para detalhes da nota
            onRemove={() => onRemove(note.id)} // Função para remover a nota
          />
        ))
      )}
    </div>
  );
}
