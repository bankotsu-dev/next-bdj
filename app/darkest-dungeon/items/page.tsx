

import { Suspense } from "react";
import { ItemGridCard, Tittle } from "@/components/darkest-dungeon/index";

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