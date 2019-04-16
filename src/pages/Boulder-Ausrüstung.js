import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";
import title from '../components/category-preview'

class BoulderAusruestung extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')

        return (
            <div style={{background: '#FFF'}}>
                <Helmet title={siteTitle}/>
                <Hero data={author.node}/>
                <Navigation/>
                <div className="wrapper">

                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h2 className="section-headline">Alle Kategorien anzeigen</h2>
                    </Link>

                    <ul className="article-list">
                        {posts.map(({node}) => {
                            return (
                                <li key={node.slug}>
                                    <ArticlePreview article={node}/>
                                </li>
                            )
                        })}
                    </ul>

                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h2 className="section-bottomLine">Alle Kategorien anzeigen</h2>
                    </Link>


                    <a href="https://www.instagram.com/boulderboys.de/"
                       title="boulder boys auf instagram"
                       rel="nofollow" target="_blank"><img
                        src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"
                        alt="boulderboys auf instagram"
                        id="instagramImg"
                        border="0"

                    />
                    </a>

                    <a href="https://www.bergfreunde-partner.de/banner/dynamisch/dyn.php"
                       title="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor"
                       rel="nofollow"
                       target="_blank">
                        <img src="https://www.bergfreunde-partner.de/banner/bergfreunde.jpg"
                             alt="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor"
                             border="0"
                             id="bfImg"
                        />
                    </a><img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=168&cpid=1&prid=1&subid=&view=1"
                             height="1"
                             width="1"
                             border="0"
                             id="bfImg"
                />

                </div>
            </div>
        )
    }
}

export default BoulderAusruestung

export const pageQuery = graphql`
  query BoulderAusruestung {
  
  allContentfulBlogPost(filter: {category: {contentful_id: {eq:"314YasijKUE4o8yIasyK4e"} } },
  sort: { fields: [publishDate], order: DESC })
  {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          category {
            title
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c3vmDTUtFqgPlNic7TBkMRw" } }) {
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
  allContentfulCategory(filter:{ contentful_id: {eq: "314YasijKUE4o8yIasyK4e" } } ) {
    edges{
      node{
        title
        }
    }
  }
}
`
