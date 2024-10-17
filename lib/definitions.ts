// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Clase = {
  id: number;
  nombre: string;
  descripcion: string | null;
  img_retrato: string;
  img: string;
}

export type Region = {
  id: number;
  nombre: string;
  frase: string;
  descripcion: string;
  desc_corta: string;
  img: string;
  provisiones: string | null;
}

export type Item = {
  id: number;
  nombre: string;
  descripcion: string | null;
  img: string;
}

export type ItemsOnCurio = {
  id: number;
  curio: Curio;
  item: Item | null;
  efecto: string;
}

export type Curio = {
  id: number;
  nombre: string;
  ll_nombre: string;
  img: string;
  region: Region | null;
  itemsOnCurio: ItemsOnCurio[];
  nombre_archivo: string | null;
}