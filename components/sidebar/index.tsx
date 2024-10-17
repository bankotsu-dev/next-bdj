"use client";

import {
    LucideIcon,
    LayoutDashboard,
    BadgeDollarSign,
    WalletCards,
    Cat,
    Dices
} from "lucide-react";
import SidebarItem from "./item";
import { CldImage } from "next-cloudinary";

interface ISidebarItem {
    name: string;
    path: string;
    icon: LucideIcon;
    items?: ISubItem[];
}

interface ISubItem {
    name: string;
    path: string;
}

const items: ISidebarItem[] = [
    {
        name: "Inicio",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Darkest Dungeon",
        path: "/darkest-dungeon",
        icon: Dices,
        items: [
            {
                name: "General",
                path: "/darkest-dungeon",
            },
            {
                name: "Regiones",
                path: "/darkest-dungeon/regiones",
            },
            {
                name: "Jefes",
                path: "/darkest-dungeon/jefes",
            },
            {
                name: "Clases",
                path: "/darkest-dungeon/clases",
            },
            {
                name: "Composiciones",
                path: "/darkest-dungeon/composiciones",
            },
            {
                name: "Curios",
                path: "/darkest-dungeon/curios",
            },
            {
                name: "Items",
                path: "/darkest-dungeon/items",
            },
        ],
    },
    {
        name: "Guild Wars 2",
        path: "/transaction",
        icon: BadgeDollarSign,
    },
    {
        name: "Tentacles Thrive",
        path: "/payment",
        icon: WalletCards,
    },
    {
        name: "Bestiario",
        path: "/bestiario",
        icon: Cat,
    },
];

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-dark text-white shadow-lg z-10 p-4">
            <div className="flex flex-col space-y-10 w-full">
                <CldImage
                    src="NAMI_WANTED_mb2tji"
                    className="h-30 w-fit"
                    width={403}
                    height={581}
                    alt="Logo"
                    priority
                />
                <div className="flex flex-col space-y-2">
                    {items.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;