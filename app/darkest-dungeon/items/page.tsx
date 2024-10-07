

import { Suspense } from "react";
import ItemGridCard from "@/components/darkest-dungeon/item-grid-card";
import Tittle from "@/components/darkest-dungeon/tittle";

export default function Page() {

  return (
    <main className="p-2 md:p-8">
      <Tittle tittle="ITEMS" />
      <div className="flex flex-nowrap mx-2 justify-center">
        <Suspense fallback={<div>Cargando...</div>} >
          <ItemGridCard />
        </Suspense>
      </div>
    </main>
  );
}