import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-700 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-white md:text-3xl md:leading-normal`}>
            <strong>Bienvenido a la Bitacora del Jugador.</strong>
          </p>
          <p>
            Este pretende ser un rincon
            donde estare registrando infromación, tips y otros datos sobre videojuegos... 
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/frieren.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/frieren.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
