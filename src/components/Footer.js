import React from 'react'
import { PageFoot, PageFootIcon } from '../data'

function Footer() {
  const date = new Date()
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {PageFoot.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className={link.className}>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="footer-icons">
          {PageFootIcon.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target={link.target}
                  className={link.className}
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            )
          })}
        </ul>

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date" style={{ color: 'white' }}>
            {date.getFullYear()}
          </span>
          all rights reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer
