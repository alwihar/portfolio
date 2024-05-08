import React from 'react'
import { Link, scrollSpy, Events } from 'react-scroll'

const ScrollNav = ({scrollNavLinks}) => {
  React.useEffect(() => {
    Events.scrollEvent.register('begin')
    Events.scrollEvent.register('end')
    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <nav className='fixed left-0 top-1/3 h-screen z-10'>
      <ul className="list-none flex flex-col items-start gap-4 text-main">
        {scrollNavLinks.map((nav) => (
          <li key={nav.id} className="scrollNav_nav-item">
            <Link
              to={nav.id}
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              className="cursor-pointer hover:text-secondary transition-colors duration-300 scrollNav_nav-item-link"
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ScrollNav
