
import { Suspense } from "react";
import RegionImg from "@/app/components/darkest-dungeon/region-img";
import Tittle from "@/app/components/darkest-dungeon/tittle";
import { getRegion } from "@/lib/actions";


export default async function Page({ params }: { params: { id: string } }) {
  const region = await getRegion(parseInt(params.id));
  console.log(region);

  return (
    <main className="md:text-lg">
      <RegionImg region={region} />
      <div className="p-2 md:p-8">
        <div className="italic text-end">"{region.frase}"</div>
        <Tittle tittle={region.nombre}></Tittle>
        <div>{region.descripcion}</div>
        <Tittle tittle="PROVISONES"></Tittle>
        <div>{region.provisiones}</div>
        <Tittle tittle="CURIOS"></Tittle>
        <Tittle tittle="JEFES"></Tittle>
      </div>
    </main>
  )
}
