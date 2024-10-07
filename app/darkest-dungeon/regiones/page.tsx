

import { Suspense } from 'react';
import Tittle from '@/components/darkest-dungeon/tittle';
import RegionTabla from '@/components/darkest-dungeon/region-table';
import Loading from '@/components/ui/loading';
import RegionCarousel from '@/components/darkest-dungeon/region-carousel';

export default async function Page() {
  return (
    <main className="p-2 md:p-8">
      <RegionCarousel />
      <Tittle tittle="REGIONES" />
      <div className="py-4">
        <Suspense fallback={<Loading />} >
          <RegionTabla />
        </Suspense>
      </div>
    </main>
  );
}