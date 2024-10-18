
import { getCuriosByRegion, getRegion } from "@/lib/actions";
import { RegionImg, RegionProvisiones, Tittle } from "@/components/darkest-dungeon/index";
import { CurioCard } from "@/components/darkest-dungeon/curios/curio-card";
import { Curio } from "@/lib/definitions";


export default async function Page({ params }: { params: { id: string } }) {
  const region = await getRegion(parseInt(params.id));
  const data = await getCuriosByRegion(parseInt(params.id));
  const curios = data.data as Curio[];
  console.log(curios);

  return (
    <main className="md:text-lg">
      <RegionImg region={region} />

      <div className="p-2 md:p-8">
        <div className="italic text-end">"{region.frase}"</div>

        <Tittle tittle={region.nombre}></Tittle>
        <div>{region.descripcion}</div>

        <Tittle tittle="PROVISONES"></Tittle>
        <div className="my-4">{region.provisiones}</div>
        <RegionProvisiones regionID={region.id} tipo={1} titulo="Misiones Cortas" />
        <RegionProvisiones regionID={region.id} tipo={2} titulo="Misiones Medianas" />
        <RegionProvisiones regionID={region.id} tipo={3} titulo="Misiones Largas" />

        <Tittle tittle="CURIOS"></Tittle>
        {
          curios.map((curio:Curio) => {
            return (
              <div key={curio.id}>
                <CurioCard {...curio} />
              </div>)
          })
        }
        <Tittle tittle="JEFES"></Tittle>
      </div>
    </main>
  )
}
