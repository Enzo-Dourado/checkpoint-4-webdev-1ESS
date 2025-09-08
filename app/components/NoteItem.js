export default function NoteItem({
  title,
  content,
  createdAt,
  onDetails,
  onRemove,
}) {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex space-x-4">
          <button onClick={onDetails} className="text-blue-600 hover:underline">
            Ver detalhes
          </button>
          <button onClick={onRemove} className="text-red-600 hover:underline">
            Excluir
          </button>
        </div>
      </div>

      <p className="text-gray-700 text-sm">{content}</p>
      <p className="text-xs text-gray-500">Criado em: {createdAt}</p>
    </div>
  );
}
