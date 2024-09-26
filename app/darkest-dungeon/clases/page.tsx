'use client'

import { CldImage } from 'next-cloudinary';

export default function Page() {
  return (
    <>
      <h1>Clases Page</h1>
      <CldImage
        src="NAMI_WANTED_mb2tji"
        width={403}
        height={581}
        alt="ant"
        priority
      />
    </>
  );
}