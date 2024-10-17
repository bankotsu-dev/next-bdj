'use server'

import { it } from "node:test";
import prisma from "./db";
import { statusError, statusOK } from "./utils";
import { ItemsOnCurio } from './definitions';

interface Response {
    status: string
    message: string
    data?: any
}

//Item
export async function getItems() {
    const items = await prisma.item.findMany();
    return items;
}


//Clases
export async function getClases(nombre: string | null, curretPage: number) {
    if (nombre) {
        const clases = await prisma.clase.findMany({
            skip: (curretPage - 1) * 10,
            take: 10,
            where: {
                nombre: {
                    contains: nombre.toUpperCase()
                }
            }
        });
        return clases;
    }
    const clases = await prisma.clase.findMany({
        skip: (curretPage - 1) * 10,
        take: 10
    });
    return clases;
}

export async function getClaseTotalPages(nombre: string | null) {
    var clases;
    if (nombre) {
        clases = await prisma.clase.count({
            where: {
                nombre: {
                    contains: nombre.toUpperCase()
                }
            }
        });
    } else {
        clases = await prisma.clase.count();
    }
    const subtotal = clases / 10;
    const residuo = clases % 10;
    var totalPages = Math.trunc(subtotal);
    if (residuo > 0) {
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
            provisiones: "REGION NO ENCONTRADA",
        };
    }
    return region;
}

export async function getProvisiones(regionId: number, tipo: number): Promise<Response> {
    try {
        const provisiones = await prisma.itemsOnRegion.findMany({
            where: {
                regionId: regionId,
                tipo: tipo
            },
            orderBy: {
                cantidad: 'desc'
            },
            include: {
                item: true
            }
        });
        return { status: statusOK, message: "Provisiones encontradas", data: provisiones };
    } catch (error) {
        console.log(error);
        return { status: statusError, message: "Error al buscar provisiones, revise la consola del servidor" };
    }
}

//Curios
export async function getCurios(nombre: string | null, curretPage: number, region: number): Promise<Response> {
    try {
        //busqueda por nombre
        if (nombre && region === 0) {
            const curios = await prisma.curio.findMany({
                skip: (curretPage - 1) * 10,
                take: 10,
                where: {
                    OR: [
                        { nombre: { contains: nombre, mode: "insensitive" } },
                        { ll_nombre: { contains: nombre, mode: "insensitive" } },
                    ]
                },
                include: {
                    region: {
                        select: {
                            id: true,
                            nombre: true,
                        }
                    },
                    itemsOnCurio: {
                        select: {
                            id: true,
                            efecto: true,
                            item: {
                                select: {
                                    nombre: true,
                                }
                            }
                        }
                    }
                }
            });
            return { status: statusOK, message: "Curios encontrados", data: curios };
        }
        //busqueda por nombre y region
        if (nombre && region > 0) {
            const curios = await prisma.curio.findMany({
                skip: (curretPage - 1) * 10,
                take: 10,
                where: {
                    AND: [
                        { regionId: region },
                        {
                            OR: [
                                { nombre: { contains: nombre, mode: "insensitive" } },
                                { ll_nombre: { contains: nombre, mode: "insensitive" } },
                            ]
                        }
                    ]
                },
                include: {
                    region: {
                        select: {
                            id: true,
                            nombre: true,
                        }
                    },
                    itemsOnCurio: {
                        select: {
                            id: true,
                            efecto: true,
                            item: {
                                select: {
                                    nombre: true,
                                }
                            }
                        }
                    }
                }
            });
            return { status: statusOK, message: "Curios encontrados", data: curios };
        }
        //busqueda por region
        if (region > 0) {
            const curios = await prisma.curio.findMany({
                skip: (curretPage - 1) * 10,
                take: 10,
                where: {
                    regionId: region
                },
                include: {
                    region: {
                        select: {
                            id: true,
                            nombre: true,
                        }
                    },
                    itemsOnCurio: {
                        select: {
                            id: true,
                            efecto: true,
                            item: {
                                select: {
                                    nombre: true,
                                }
                            }
                        }
                    }
                }
            });
            return { status: statusOK, message: "Curios encontrados", data: curios };
        }
        //busqueda sin filtros
        const curios = await prisma.curio.findMany({
            skip: (curretPage - 1) * 10,
            take: 10,
            include: {
                region: {
                    select: {
                        id: true,
                        nombre: true,
                    },
                },
                itemsOnCurio: {
                    select: {
                        id: true,
                        efecto: true,
                        item: {
                            select: {
                                nombre: true,
                            }
                        }
                    }
                }
            }
        });
        return { status: statusOK, message: "Curios encontrados", data: curios };
    } catch (error) {
        console.log(error);
        return { status: statusError, message: "Error al buscar curios, revise la consola del servidor" };
    }
}

export async function getCurioTotalPages(nombre: string | null, region: number) {
    var curios = 0;
    if (nombre && region === 0) {
        curios = await prisma.curio.count({
            where: {
                OR: [
                    { nombre: { contains: nombre, mode: "insensitive" } },
                    { ll_nombre: { contains: nombre, mode: "insensitive" } },
                ]
            },
        });
    }
    //busqueda por nombre y region
    if (nombre && region > 0) {
        curios = await prisma.curio.count({
            where: {
                AND: [
                    { regionId: region },
                    {
                        OR: [
                            { nombre: { contains: nombre, mode: "insensitive" } },
                            { ll_nombre: { contains: nombre, mode: "insensitive" } },
                        ]
                    }
                ]
            },
        });
    }
    //busqueda por region
    if (!nombre && region > 0) {
        curios = await prisma.curio.count({
            where: {
                regionId: region
            },
        });
    }
    //busqueda sin filtros
    if (!nombre && region === 0) {
        curios = await prisma.curio.count();
    }


    const subtotal = curios / 10;
    const residuo = curios % 10;
    var totalPages = Math.trunc(subtotal);
    if (residuo > 0) {
        totalPages++;
    }
    if (totalPages === 0) {
        totalPages = 1;
    }

    return totalPages;
}