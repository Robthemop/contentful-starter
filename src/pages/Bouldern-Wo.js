import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";


class BoulderSpots extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')

        return (
            <div style={{background: '#fff'}}>
                <Helmet title={siteTitle}/>

                <div className="wrapper">

                    <Hero data={author.node}/>
                    <Navigation/>

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
        )
    }
}

export default BoulderSpots

export const pageQuery = graphql`
  query BoulderSpots {
  
  allContentfulBlogPost(filter: {category: {contentful_id: {eq:"5Yqtk99s2c0YgC8QsMceGc"} } },
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
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c376FGKHuwt3rYECpQOjy94" } }) {
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
    allContentfulCategory(filter:{ contentful_id: {eq: "5Yqtk99s2c0YgC8QsMceGc"}}){
    edges{
      node{
        title
        }
    }
  }
  }
`
