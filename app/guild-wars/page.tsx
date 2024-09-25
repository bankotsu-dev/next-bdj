import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>Guild Wars 2 Page</h1>
      <Image
        src="/tharja.png"
        width={600}
        height={400}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </>
  );
}