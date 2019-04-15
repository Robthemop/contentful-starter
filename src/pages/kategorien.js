import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import ArticlePreview from "../components/category-preview";
import category from '../components/category-preview.css';

class Kategorien extends React.Component {


    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const category = get(this, 'props.data.allContentfulCategory.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')

        return (
            <div style={{background: '#FFF'}}>
                <Hero data={author.node}/>
                <Navigation/>
                <Helmet title={siteTitle}/>
                <div style={{textAlign: 'justify'}}>
                    <div className="wrapper">

                        <h3>Kategorien:</h3>

                        <ul className="category-list">
                            {category.map(({node}) => {
                                return (
                                    <li key={node.slug}>
                                        <ArticlePreview category={node}/>
                                    </li>
                                )
                            })}
                        </ul>


                        <div style={{marginTop: 25, color: "#3D5B80"}}>
                            <Link to="/"
                                  style={{textDecoration: 'none'}}>
                                <h3>Bring mich zu allen Blog Artikeln</h3>
                            </Link>
                        </div>

                        <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154"
                           title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                           rel="nofollow" target="_blank"><img
                            src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_468x60.jpg"
                            alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                            border="0"
                            id="imgBF"
                        />
                        </a>
                        <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=23&cpid=1&prid=1&subid=&view=1"
                             height="1"
                             width="1"
                             border="0"
                             id="imgBF"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Kategorien

export const pageQuery = graphql`
  query KategorienQuery {
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
    allContentfulCategory{
    edges{
        node{
            title
         }
     }
    }
  }
`
