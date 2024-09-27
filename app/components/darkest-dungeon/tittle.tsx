

export default function Tittle({ tittle }:{ tittle: string }) {
    return (
        <div className="text-center my-4">
            <h1 className="mb-4 text-xl md:text-5xl font-bold text-indigo-500">{ tittle }</h1>
        </div>
    );
}