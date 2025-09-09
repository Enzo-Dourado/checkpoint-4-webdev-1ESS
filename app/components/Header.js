import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-around bg-blue-600 text-slate-50 font-bold py-4">
      <div className="flex gap-2">
        <img src="./assets/imagem-padrao.png" alt="lapis e papel" className="h-10"/>
        <h1 className="text-xl"> App de Anotação</h1>
      </div>
      <div>
        <Link href={`/`}>Início</Link>
      </div>
    </div>
  );
}
