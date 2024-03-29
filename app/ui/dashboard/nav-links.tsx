'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  PhoneIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Hem', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Fakturor',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Våra kunder', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Blog', href: '/dashboard/blog', icon: PencilSquareIcon },
  { name: 'Kontakta oss', href: '/dashboard/contact', icon: PhoneIcon },
  { name: 'Om oss', href: '/dashboard/about', icon: LightBulbIcon },
  { name: 'Våra tjänster', href: '/dashboard/services', icon: LightBulbIcon },
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
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
