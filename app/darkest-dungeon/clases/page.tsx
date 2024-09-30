
import { Suspense } from "react";
import ClaseTable from "@/app/components/darkest-dungeon/clase-table";
import Search from "@/app/components/ui/search";
import Tittle from "@/app/components/darkest-dungeon/tittle";
import Loading from "@/app/components/ui/loading";
import Pagination from "@/app/components/ui/pagination";
import { getClaseTotalPages } from "@/lib/actions";




export default async function Page({ searchParams}: {searchParams?: { query?: string, page?: string}}) 
{
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const totalPages = await getClaseTotalPages(query);

  return (
    <>
      <Tittle tittle="Clases" />
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
    </>
  );
}