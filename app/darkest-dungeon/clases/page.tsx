
import { Suspense } from "react";
import { Loading, Pagination, Search } from "@/components/ui/index";
import {ClaseTable, Tittle} from "@/components/darkest-dungeon/index";
import { getClaseTotalPages } from "@/lib/actions";




export default async function Page({ searchParams}: {searchParams?: { query?: string, page?: string}}) 
{
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const totalPages = await getClaseTotalPages(query);

  return (
    <main className="p-2 md:p-8">
      <Tittle tittle="CLASES" />
      <div className="p-4">
        <Search placeholder="Buscar" />
      </div>
      <div className="py-4">
        <Suspense key={ query + currentPage } fallback={<Loading />} >
          <ClaseTable query={ query } currentPage={ currentPage } />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}