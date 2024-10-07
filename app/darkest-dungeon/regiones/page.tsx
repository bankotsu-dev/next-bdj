

import { Suspense } from 'react';
import Tittle from '@/components/darkest-dungeon/tittle';
import { RegionTable, RegionCarousel } from '@/components/index';
import Loading from '@/components/ui/loading';

export default async function Page() {
  return (
    <main className="p-2 md:p-8">
      <RegionCarousel />
      <Tittle tittle="REGIONES" />
      <div className="py-4">
        <Suspense fallback={<Loading />} >
          <RegionTable />
        </Suspense>
      </div>
    </main>
  );
}