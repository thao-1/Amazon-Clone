import Link from 'next/link';
import { Button } from './button';

const navigationItems = [
  { label: 'All', href: '/all-menu' },
  { label: "Today's Deal", href: '/todays-deals' },
  { label: 'Customer Service', href: '/customer-service' },
  { label: 'Registry', href: '/registry' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'Sell', href: '/sell' },
];

export function Navigation() {
  return (
    <nav className="flex space-x-4">
      {navigationItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button variant="ghost" className="px-2 py-1">
            {item.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
