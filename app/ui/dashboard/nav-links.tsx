import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
type Link = {
  name: string;
  href: string;
  icon: React.ReactNode;
};
const links: Array<Link> = [
  { name: 'Home', href: '/dashboard', icon: <HomeIcon className="w-6" /> },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: <DocumentDuplicateIcon className="w-6" />,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: <UserGroupIcon className="w-6" />,
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {link.icon}
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;
