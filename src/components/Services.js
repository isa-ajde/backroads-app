import React from 'react'
import { Data, ServivesArt } from '../data'

function Services() {
  return (
    <div>
      <section className="section services" id="services">
        <Data title="our" subtitle="services" />

        <div className="section-center services-center">
          {ServivesArt.map((link) => {
            return (
              <article key={link.id} className="service">
                <span className="service-icon">
                  <i className={link.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{link.title}</h4>
                  <p className="service-text">{link.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Services
