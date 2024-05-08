import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`${isScrolled ? 'scrolled' : ''} header fixed z-20 w-full flex items-center py-10 px-32 justify-between`}>
      <div className="flex ss:gap-40 gap-4 items-center">
        <Link to='' className="flex flex-col leading-5">
          <span className="font-denver text-secondary text-[32px]">alwi.</span>
          <span className="font-sans text-[12px] text-main pl-5">frontend developer</span>
        </Link>
        <ul className="list-none flex gap-8 text-main">
          {navLinks.map((nav) => (
            <li key={nav.id} className="nav-item">
              <Link to={nav.id} className="hover:text-secondary transition-colors duration-300">
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header_say-hello-container text-main">
        <div className="header_say-hello-circle"/>
        <span className="header_say-hello-text bg-primary">say hello</span>
      </div>
    </nav>
  )
}

export default Header