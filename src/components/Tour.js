import React from 'react'
import { Data, ToursArt } from '../data'

function Tour() {
  return (
    <div>
      <section className="section" id="tours">
        <Data title="featured" subtitle="tours" />

        <div className="section-center featured-center">
          {ToursArt.map((link) => {
            return (
              <article className="tour-card">
                <div className="tour-img-container">
                  <img src={link.href} className="tour-img" alt="" />
                  <p className="tour-date" style={{ fontWeight: 'bold' }}>
                    {link.date}
                  </p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{link.title}</h4>
                  </div>
                  <p>{link.subtitle}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={link.icon}></i>
                      </span>{' '}
                      {link.country}
                    </p>
                    <p>{link.dateTitle}</p>
                    <p>{link.price}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Tour
