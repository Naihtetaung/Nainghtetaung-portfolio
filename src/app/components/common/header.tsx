import React from 'react'
import MainNav from './navbar'
import ModeToggle from './mode-toggle'
import { routesConfig } from '@/src/config/routes'

const Header = () => {
  return (
    <header className="container z-50 bg-background">
    <div className="flex h-20 items-center justify-between py-6">
      <MainNav items={routesConfig}/>
      <nav className="flex items-center gap-5">
        <ModeToggle />
      </nav>
    </div>
  </header>
  )
}

export default Header