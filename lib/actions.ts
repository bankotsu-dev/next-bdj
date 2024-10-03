'use server'

import prisma from "./db";


//Item
export async function getItems() {
    const items = await prisma.item.findMany();
    return items;
}


//Clases
export async function getClases(nombre: string | null, curretPage: number) {
    if(nombre){
        const clases = await prisma.clase.findMany({
            skip: (curretPage - 1) * 5,
            take: 5,
            where: {
                nombre: {
                    contains: nombre.toUpperCase()
                }
            }
        });
        return clases;
    }
    const clases = await prisma.clase.findMany({
        skip: (curretPage - 1) * 5,
        take: 5
    });
    return clases;
}

export async function getClaseTotalPages(nombre: string | null) {
    var clases;
    if(nombre){
        clases = await prisma.clase.count({
            where: {
                nombre: {
                    contains: nombre.toUpperCase()
                }
            }
        });
    }else{
    clases= await prisma.clase.count();
    }
    const subtotal = clases / 5;
    const residuo = clases % 5;
    var totalPages = Math.trunc(subtotal);
    if(residuo > 0){
        totalPages++;
    }

    return totalPages;
}

//Regiones

export async function getRegiones() {
    const regiones = await prisma.region.findMany();
    return regiones;
}

export async function getRegion(id: number) {
    const region = await prisma.region.findUnique({
        where: {
            id: id
        }
    });
    if (!region) {
        return {
            id: 0, 
            nombre: "REGION NO ENCONTRADA",
            frase: "REGION NO ENCONTRADA",
            descripcion: "REGION NO ENCONTRADA",
            desc_corta: "REGION NO ENCONTRADA",
            img: "dd/regiones/pmosjvxtbkawoqppbzks",
            provisiones: "REGION NO ENCONTRADA"
        };
    }
    return region;
}