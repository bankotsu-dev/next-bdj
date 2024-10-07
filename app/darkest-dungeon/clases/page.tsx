
import { Suspense } from "react";
import ClaseTable from "@/components/darkest-dungeon/clase-table";
import Search from "@/components/ui/search";
import Tittle from "@/components/darkest-dungeon/tittle";
import Loading from "@/components/ui/loading";
import Pagination from "@/components/ui/pagination";
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