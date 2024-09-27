'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Regiones', href: '/darkest-dungeon/regiones', icon: HomeIcon },
  { name: 'Jefes', href: '/darkest-dungeon/jefes', icon: DocumentDuplicateIcon,},
  { name: 'Enemigos', href: '/darkest-dungeon/enemigos', icon: UserGroupIcon },
  { name: 'Curios', href: '/darkest-dungeon/curios', icon: UserGroupIcon },
  { name: 'Clases', href: '/darkest-dungeon/clases', icon: UserGroupIcon },
  { name: 'Composiciones', href: '/darkest-dungeon/composiciones', icon: UserGroupIcon },
  { name: 'Items', href: '/darkest-dungeon/items', icon: UserGroupIcon },
  { name: 'Consejos', href: '/darkest-dungeon/consejos', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm 
              font-medium hover:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3
              ${pathname === link.href ? 'bg-indigo-500 text-white' : ''}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
