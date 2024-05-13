import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom'

import { navLinks } from '../constants'
import { scrollToSection, scrollToTop } from '../utils'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } })
    } else {
      scrollToSection('contact', -200)
    }
  }

  const handleNavClick = (path) => {
    navigate(path)
    scrollToTop()
  }

  useEffect(() => {
    if (location.state?.scrollToContact) {
      scrollToSection('contact', -200)
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={`${isScrolled ? 'scrolled' : ''} header fixed z-50 w-full flex items-center py-10 px-32 justify-between`}>
      <div className="flex ss:gap-40 gap-4 items-center">
        {/* Logo - Hide on mobile screens */}
        <Link to='/' className="hidden sm:flex flex-col leading-5" onClick={() => handleNavClick('/')}>
          <span className="font-denver text-secondary text-[32px]">alwi.</span>
          <span className="font-sans text-[12px] text-main pl-5">frontend developer</span>
        </Link>
        <ul className="list-none flex gap-8 text-main">
          {navLinks.map((nav) => (
            <li key={nav.id} className="nav-item">
              <NavLink to={nav.id} className={({ isActive }) =>
                `transition-colors duration-300 hover:text-secondary ${isActive ? 'text-secondary' : 'text-main'}`
              } onClick={() => handleNavClick(nav.id)}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Say Hello - Use 'hidden md:flex' to remove it from layout on mobile */}
      <div className="header_say-hello-container text-main flex items-center hidden md:flex">
        <div className="header_say-hello-circle"/>
        <button className='header_say-hello-text bg-primary' onClick={handleNavigation}>
          say hello
        </button>
      </div>
    </div>
  )
}

export default Header