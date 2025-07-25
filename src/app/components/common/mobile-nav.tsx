'use client'
import Link from 'next/link';
import React from 'react'
import { cn } from '../../lib/utils';
interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({children, items}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-background p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <h3 className='font-heading text-lg'>
            NaingHtetAung
          </h3>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium transition-colors hover:text-foreground/80",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}

export default MobileNav