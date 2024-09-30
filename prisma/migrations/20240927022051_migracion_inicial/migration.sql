-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "frase" VARCHAR(255) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "desc_corta" TEXT NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "provisiones" TEXT,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255),
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemsOnRegion" (
    "itemId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "tipo" INTEGER NOT NULL,

    CONSTRAINT "ItemsOnRegion_pkey" PRIMARY KEY ("itemId","regionId")
);

-- CreateTable
CREATE TABLE "Curio" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "Curio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemsOnCurio" (
    "curioId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "efecto" VARCHAR(255) NOT NULL,

    CONSTRAINT "ItemsOnCurio_pkey" PRIMARY KEY ("curioId","itemId")
);

-- CreateTable
CREATE TABLE "Clase" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" VARCHAR(255),
    "img_retrato" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "Clase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formacion" (
    "id" SERIAL NOT NULL,
    "descripcion" VARCHAR(255),

    CONSTRAINT "Formacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jefe" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "stats_desc" TEXT NOT NULL,
    "img_stats" VARCHAR(255) NOT NULL,
    "estrategias" TEXT,
    "memorias_1" TEXT,
    "memorias_2" TEXT,
    "memorias_3" TEXT,

    CONSTRAINT "Jefe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "stats" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255),
    "jefeId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClaseToFormacion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ClaseToJefe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FormacionToJefe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_JefeToRegion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClaseToFormacion_AB_unique" ON "_ClaseToFormacion"("A", "B");

-- CreateIndex
CREATE INDEX "_ClaseToFormacion_B_index" ON "_ClaseToFormacion"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClaseToJefe_AB_unique" ON "_ClaseToJefe"("A", "B");

-- CreateIndex
CREATE INDEX "_ClaseToJefe_B_index" ON "_ClaseToJefe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FormacionToJefe_AB_unique" ON "_FormacionToJefe"("A", "B");

-- CreateIndex
CREATE INDEX "_FormacionToJefe_B_index" ON "_FormacionToJefe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JefeToRegion_AB_unique" ON "_JefeToRegion"("A", "B");

-- CreateIndex
CREATE INDEX "_JefeToRegion_B_index" ON "_JefeToRegion"("B");

-- AddForeignKey
ALTER TABLE "ItemsOnRegion" ADD CONSTRAINT "ItemsOnRegion_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsOnRegion" ADD CONSTRAINT "ItemsOnRegion_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curio" ADD CONSTRAINT "Curio_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsOnCurio" ADD CONSTRAINT "ItemsOnCurio_curioId_fkey" FOREIGN KEY ("curioId") REFERENCES "Curio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsOnCurio" ADD CONSTRAINT "ItemsOnCurio_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_jefeId_fkey" FOREIGN KEY ("jefeId") REFERENCES "Jefe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClaseToFormacion" ADD CONSTRAINT "_ClaseToFormacion_A_fkey" FOREIGN KEY ("A") REFERENCES "Clase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClaseToFormacion" ADD CONSTRAINT "_ClaseToFormacion_B_fkey" FOREIGN KEY ("B") REFERENCES "Formacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClaseToJefe" ADD CONSTRAINT "_ClaseToJefe_A_fkey" FOREIGN KEY ("A") REFERENCES "Clase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClaseToJefe" ADD CONSTRAINT "_ClaseToJefe_B_fkey" FOREIGN KEY ("B") REFERENCES "Jefe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormacionToJefe" ADD CONSTRAINT "_FormacionToJefe_A_fkey" FOREIGN KEY ("A") REFERENCES "Formacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormacionToJefe" ADD CONSTRAINT "_FormacionToJefe_B_fkey" FOREIGN KEY ("B") REFERENCES "Jefe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JefeToRegion" ADD CONSTRAINT "_JefeToRegion_A_fkey" FOREIGN KEY ("A") REFERENCES "Jefe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JefeToRegion" ADD CONSTRAINT "_JefeToRegion_B_fkey" FOREIGN KEY ("B") REFERENCES "Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;
