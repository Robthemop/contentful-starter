import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'

class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (

  <div>
  <h1>Kontakt</h1>
  <p>Hast du Fragen?</p>
  <p>Du kannst mir hier eine sofort Nachicht schicken</p>
  <form
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input name="name" placeholder="Your Name" type="text" />
    <input name="email" placeholder="name@name.com" type="email" />
    <textarea name="message" />
    <button>Send</button>
  </form>
  <Link to="/">Bring mich zum Blog</Link>
        </div>
      )
  }
}

export default Contact
