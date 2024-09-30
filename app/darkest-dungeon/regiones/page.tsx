

import { Suspense } from 'react';
import Tittle from '@/app/components/darkest-dungeon/tittle';
import RegionTabla from '@/app/components/darkest-dungeon/region-table';
import Loading from '@/app/components/ui/loading';
import RegionCarousel from '@/app/components/darkest-dungeon/region-carousel';

export default async function Page() {
  return (
    <>
      {/* Carrosel de imagenes aqui */}
      <RegionCarousel />
      <Tittle tittle="REGIONES" />
      <div className="py-4">
        <Suspense fallback={<Loading />} >
          <RegionTabla />
        </Suspense>
      </div>
    </>
  );
}