import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";

class BouldernBasics extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulArticle.edges')


        return (
            <div style={{background: '#FFF'}}>
                <Helmet title={siteTitle}/>

                <div className="wrapper">

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

                        <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154"
                           title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                           rel="nofollow"
                           target="_blank">
                            <img src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_728x90.jpg"
                                 alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                                 border="0" /></a>
                        <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=30&cpid=1&prid=1&subid=&view=1"
                             height="1"
                             width="1"
                             border="0" />

                    </div>

                </div>
            </div>
        )
    }
}

export default BouldernBasics

export const pageQuery = graphql`
  query BoulderBasics {
 
  allContentfulArticle(filter: {category: {contentful_id: {eq:"tYDKdQwpe2Y3gQlOxODv8"} } },
  sort: { fields: [publishDate], order: DESC })
  {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
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
    allContentfulPerson(filter: { id: { eq: "c4cNLshPowfDz3fQmQXlDTw" } }) {
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
    allContentfulCategory(filter:{ contentful_id: {eq: "tYDKdQwpe2Y3gQlOxODv8"} } ) {
    edges{
      node{
        title
        }
    }
  }
  }
`
