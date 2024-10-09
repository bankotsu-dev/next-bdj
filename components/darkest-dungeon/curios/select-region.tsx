'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Region } from '@/lib/definitions';

export function SelectRegion({ regiones }: { regiones: Region[] }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('region', value);
        } else {
            params.delete('region');
        }
        params.set('page', '1');
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <Select onValueChange={handleSearch}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="0">All</SelectItem>
                    {regiones.map((region) => (
                        <SelectItem key={region.id} value={region.id.toString()}>{region.nombre}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}