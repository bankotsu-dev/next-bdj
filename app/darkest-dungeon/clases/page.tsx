'use client'

import { CldImage } from 'next-cloudinary';

export default function Page() {
  return (
    <>
      <h1>Clases Page</h1>
      <CldImage
        src="https://res.cloudinary.com/bdj/image/upload/v1727233187/NAMI_WANTED_mb2tji.jpg"
        width={80}
        height={80}
        alt="ant"
        priority
      />
    </>
  );
}