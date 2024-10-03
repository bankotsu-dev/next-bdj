import Tittle from "@/app/components/darkest-dungeon/tittle";
import { getRegion } from "@/lib/actions";


export default async function Page({ params }: { params: { id: string } }) {
  const region = await getRegion(parseInt(params.id));

  return (
    <>
      <Tittle tittle={region.nombre}></Tittle>
      <div>"{ region.frase }"</div>
      <div>{ region.descripcion }</div>
      <Tittle tittle="PROVISONES"></Tittle>
      <div>{ region.provisiones }</div>
      <Tittle tittle="CURIOS"></Tittle>
      <Tittle tittle="JEFES"></Tittle>
    </>
  )
}
