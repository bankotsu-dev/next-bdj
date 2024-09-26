'use client'

import { CldImage } from 'next-cloudinary';

export default function Page() {
    return (
      <>
      <CldImage
        src="dd/regiones/pmosjvxtbkawoqppbzks"
        width={1920}
        height={520}
        alt="ant"
        priority
      />
        <h1 className="mb-4 text-xl md:text-2xl">Darkest Dungeon Regiones Page</h1>
      </>
    );
  }