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
  { name: 'Darkest Dungeon', href: '/darkest-dungeon', icon: HomeIcon },
  {
    name: 'Guild Wars 2', href: '/guild-wars', icon: DocumentDuplicateIcon,
  },
  { name: 'Tentacles  Thrive', href: '/tentacles-thrive', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm 
              font-medium hover:bg-violet-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3
              ${isActive ? 'bg-violet-500 text-white' : ''}
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
