import React from 'react'
import Helmet from 'react-helmet'

import Age from '../components/age'
import Mail from '../components/mail'

const About = () => (
  <div>
    <Helmet title="About" />

    <h1>About</h1>

    <p>My name is Thibaut, I am <Age /> years old.</p>

    <p>I am a frontend developer, with a special love for clean, efficient and fast interfaces.</p>

    <p>You can <a href="//github.com/thibautRe">check my github</a>, <a href="/Resume%20Thibaut%20REMY-2018.pdf" download>download my resume</a> or <Mail>send me a mail</Mail></p>
  </div>
)


export default About
