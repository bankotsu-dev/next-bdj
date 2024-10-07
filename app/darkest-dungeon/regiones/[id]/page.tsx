
import { getRegion } from "@/lib/actions";
import { RegionImg, RegionProvisiones, Tittle } from "@/components/darkest-dungeon/index";


export default async function Page({ params }: { params: { id: string } }) {
  const region = await getRegion(parseInt(params.id));

  return (
    <main className="md:text-lg">
      <RegionImg region={region} />

      <div className="p-2 md:p-8">
        <div className="italic text-end">"{region.frase}"</div>

        <Tittle tittle={region.nombre}></Tittle>
        <div>{region.descripcion}</div>

        <Tittle tittle="PROVISONES"></Tittle>
        <div className="my-4">{region.provisiones}</div>
        <RegionProvisiones regionID={region.id} tipo={ 1 } titulo="Misiones Cortas" />
        <RegionProvisiones regionID={region.id} tipo={ 2 } titulo="Misiones Medianas" />
        <RegionProvisiones regionID={region.id} tipo={ 3 } titulo="Misiones Largas" />

        <Tittle tittle="CURIOS"></Tittle>

        <Tittle tittle="JEFES"></Tittle>
      </div>
    </main>
  )
}
