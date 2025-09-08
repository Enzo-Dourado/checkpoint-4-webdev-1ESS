import Link from "next/link";

export default function Header() {
    return(
        <div className="flex justify-around bg-blue-600 text-slate-50 font-bold py-4">
            <h1 className="text-xl">📝 App de Anotação</h1>
            <div>
                <Link href={`/`}>Início</Link>
            </div>
        </div>
    )
}