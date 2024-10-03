

export default function Tittle({ tittle }:{ tittle: string }) {
    return (
        <div className="text-center my-4">
            <h1 className="mb-4 md:mb-8 p-2 md:p-6 text-xl md:text-5xl font-bold text-yellow-600 border-b-2 border-b-yellow-600">{ tittle }</h1>
        </div>
    );
}