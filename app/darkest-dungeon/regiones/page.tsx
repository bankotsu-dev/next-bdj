

import { Suspense } from 'react';
import { RegionTable, RegionCarousel, Tittle } from '@/components/darkest-dungeon/index';
import { Loading } from "@/components/ui/index";

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