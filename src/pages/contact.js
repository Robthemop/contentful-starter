import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Navigation from '../components/navigation'
import Hero from '../components/hero'

class Contact extends React.Component {


  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{background: '#FFF'}}>
      <Hero data={author.node} />
      <Navigation />
      <Helmet title={siteTitle} />
      <div style={{textAlign: 'justify'}}>
      <h1>Sende mir eine E-Mail:</h1>

      <form
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >

    <div><input name="name" placeholder="Your Name" type="text" /></div>

    <div style={{marginTop: 10}}><input name="email" placeholder="name@name.com" type="email" /></div>

    <div style={{marginTop: 10}}><textarea name="message" /></div>

    <div style={{marginTop: 10}}><input
            name="stimmt zu"
            type="checkbox"
             />

             <label>
             Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
             Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an 1robinhess@gmail.com widerrufen.
             </label></div>

    <div style={{marginTop: 10}}></div>

    <div data-netlify-recaptcha="true"></div>

  <p>
    <button type="submit">Send</button>
  </p>

  </form>

  <div style={{marginTop: 25}}>
  <Link to="/">Bring mich zum Blog</Link>
  </div>

  <a href="https://www.bergfreunde-partner.de/banner/dynamisch/dyn.php"
   title="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor"
   rel="nofollow" target="_blank">
   <img
   id="imgBF"
   src="https://www.bergfreunde-partner.de/banner/bergfreunde.jpg"
   height="250px"
   width="250px"
   alt="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor"
   border="0"/>
   </a>
   <img
   id="imgBF"
   src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=168&cpid=1&prid=1&subid=&view=1"
   height="250px"
   width="250px"
   border="0"/>

      </div>
      </div>
      )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          heroImage: image {
            sizes(
              maxWidth: 3728
              maxHeight: 2376
              resizingBehavior: PAD
              background: "rgb:FFFFFF"
            ) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
