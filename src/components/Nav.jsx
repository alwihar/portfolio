import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <nav className='flex items-center py-6 justify-between'>
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
      <div className="nav_say-hello-container text-main">
        <div className="nav_say-hello-circle"/>
        <span className="nav_say-hello-text bg-primary">say hello</span>
      </div>
    </nav>
  )
}

export default Nav