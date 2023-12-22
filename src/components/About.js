import React from 'react'
import ABout from '../images/about.jpeg'
import { Data } from '../data'

function About() {
  return (
    <div>
      <section className="section" id="about">
        <Data title="about" subtitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={ABout} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About
