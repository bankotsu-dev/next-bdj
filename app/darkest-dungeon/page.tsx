import Image from "next/image";

export default function Page() {
    return (
      <>
        <h1 className="mb-4 text-xl md:text-2xl">Darkest Dungeon Page</h1>
        <Image
            src="/dd/ddcollector.png"
            width={600}
            height={800}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority
          />
      </>
    );
  }