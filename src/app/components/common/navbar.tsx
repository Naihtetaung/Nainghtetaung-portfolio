"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { cn } from '../../lib/utils';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import MobileNav from './mobile-nav';
import { usePathname } from 'next/navigation';
import { useLockBodyScroll } from '@custom-react-hooks/all';

interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

interface NavbarProps {
  items: NavItem[]
  children?: React.ReactNode;
}

const MainNav: React.FC<NavbarProps> = ({items, children}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useLockBodyScroll(open)

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href="/" className='hidden md:flex items-center space-x-2'>
        <h1 className="font-heading text-2xl">
          NaingHtetAung
        </h1>
      </Link>
      {items.map((item, index) => (
        <div
          key={index}
          className="hidden md:flex transition-transform duration-200 hover:scale-[1.05] active:scale-[0.95]"
        >
          <Link
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex items-center font-medium transition-colors hover:text-foreground/80 text-lg sm:text-sm",
              item.href === pathname
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </Link>
        </div>
      ))}
      <button className="flex items-center space-x-2 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? 
          <Cross1Icon/> :
          <HamburgerMenuIcon/>
        }
        <span className="font-bold">Menu</span>
      </button>
      {open && items && (
        <MobileNav items={items}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}

export default MainNav