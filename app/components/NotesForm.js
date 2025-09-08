import { useState } from "react";

export default function NotesForm({ onAddNote, nextId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: nextId,
      title,
      content,
      createdAt: new Date().toLocaleTimeString(),
    };

    onAddNote(newNote);

    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-4 border rounded-lg shadow-sm bg-white space-y-3"
    >
      <h2 className="text-lg font-semibold">Nova Anotação</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-md p-2"
      />

      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded-md p-2"
        rows={4}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Salvar
      </button>
    </form>
  );
}
