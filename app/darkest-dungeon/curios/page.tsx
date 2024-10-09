
import { Suspense } from "react";
import { CurioTable, SelectRegion, Tittle } from "@/components/darkest-dungeon/index";
import { Loading, Pagination, Search } from "@/components/ui/index";
import { getCurioTotalPages, getRegiones } from "@/lib/actions";




export default async function Page({ searchParams}: {searchParams?: { query?: string, page?: string, region?: string }}) 
{
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const region = Number(searchParams?.region) || 0;
  const totalPages = await getCurioTotalPages(query);
  const regiones = await getRegiones();

  return (
    <main className="p-2 md:p-8">
      <Tittle tittle="CURIOS" />
      <div>{ region }</div>
      <div className="p-4 flex">
        <Search placeholder="Buscar" />
        <SelectRegion  regiones={regiones } />
      </div>
      <div className="py-4">
        <Suspense key={ query + currentPage } fallback={<Loading />} >
          <CurioTable query={ query } currentPage={ currentPage } />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}