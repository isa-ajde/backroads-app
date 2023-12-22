import React from 'react'
import Logo from '../images/logo.svg'
import { PageLink, PageIcon } from '../data'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {PageLink.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul className="nav-icons">
            {PageIcon.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.target}
                    className={link.className}
                  >
                    <i className={link.ıconClas}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
