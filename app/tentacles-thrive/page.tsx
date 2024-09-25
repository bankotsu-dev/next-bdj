import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>Tentacles Thrive Page</h1>
      <Image
        src="/tentacles-thrive/lilith.gif"
        width={600}
        height={400}
        className="hidden md:block mt-4"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </>
  );
}