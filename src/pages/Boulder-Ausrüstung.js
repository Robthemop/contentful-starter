import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";
import title from '../components/category-preview'
import Categorys from '../components/categorys'

class BoulderAusruestung extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')
        const [categorys] = get(this, 'props.data.allContentfulCategory.edges')

        return (
            <div style={{background: '#FFF'}}>
                <Helmet title={siteTitle}/>
                <Hero data={author.node}/>
                <Categorys categoryData={categorys.node}/>
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
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: PAD) {
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
  allContentfulCategory(filter:{ contentful_id: {eq: "314YasijKUE4o8yIasyK4e"}}){
    edges{
      node{
        title
        }
    }
  }
}
`
