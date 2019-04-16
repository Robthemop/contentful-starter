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
                <Helmet title={siteTitle}/>
                <div style={{textAlign: 'justify'}}>

                    <div className="wrapper">

                        <Hero data={author.node}/>
                        <Navigation/>
                        <h3>Sende mir eine E-Mail:</h3>

                        <form
                            name="contact-form"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >

                            <div><input name="name" placeholder="Your Name" type="text"/></div>

                            <div style={{marginTop: 10}}><input name="email" placeholder="name@name.com" type="email"/>
                            </div>

                            <div style={{marginTop: 10}}><textarea name="message"/></div>

                            <div style={{marginTop: 10}}><input
                                name="stimmt zu"
                                type="checkbox"
                            />

                                <label>
                                    Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine
                                    Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und
                                    gespeichert werden.
                                    Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an
                                    1robinhess@gmail.com widerrufen.
                                </label></div>

                            <div style={{marginTop: 10}}></div>

                            <div data-netlify-recaptcha="true"></div>

                            <p>
                                <button type="submit">Send</button>
                            </p>

                        </form>

                        <Link to="/kategorien/"
                              style={{textDecoration: 'none'}}>
                            <h2 className="section-bottomLine">Alle Kategorien anzeigen</h2>
                        </Link>

                        <div>

                            <div style={{display: "inline-block"}}>
                                <a href="https://www.bergfreunde-partner.de/banner/dynamisch/dyn.php"
                                   title="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor"
                                   rel="nofollow"
                                   target="_blank">
                                    <img src="https://www.bergfreunde-partner.de/banner/bergfreunde.jpg"
                                         alt="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor"
                                         border="0"
                                         id="bfImg"
                                    />
                                </a>
                                <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=168&cpid=1&prid=1&subid=&view=1"
                                     height="1"
                                     width="1"
                                     border="0"
                                     id="bfImg"
                                />
                            </div>

                            <div style={{display: "inline-block", marginLeft: "3em"}}>
                                <a href="https://www.instagram.com/boulderboys.de/"
                                   title="boulder boys auf instagram"
                                   rel="nofollow" target="_blank">
                                    <img
                                        src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"
                                        alt="boulderboys auf instagram"
                                        id="instagramImg"
                                        border="0"
                                    />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPerson(filter: { id: { eq: "c6JKKjih2XjAeggsVNbWGrb" } }) {
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
