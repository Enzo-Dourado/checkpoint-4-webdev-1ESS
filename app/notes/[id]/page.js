"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import Header from "../../components/Header";

export default function NotePage() {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Recupera os dados da nota da URL
  const note = {
    id,
    title: searchParams.get("title"),
    content: searchParams.get("content"),
    createdAt: searchParams.get("createdAt"),
  };

  return (
    <>
      <Header />
      <div className="p-6 space-y-6">
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">{note.title}</h1>
            <button
              onClick={() => router.push("/")}
              className="text-blue-600 font-medium hover:underline"
            >
              Voltar
            </button>
          </div>
          <div className="mt-4">
            <pre className="whitespace-pre-line text-gray-700 text-base">
              {note.content}
            </pre>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Criado em: {note.createdAt}
          </p>
        </div>
      </div>
    </>
  );
}
