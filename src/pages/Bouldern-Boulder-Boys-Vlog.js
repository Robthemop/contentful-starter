import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link"


class BouldernBoulderBoysVlog extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')


        return (
            <div style={{background: '#fff'}}>
                <Helmet title={siteTitle}/>

                <Navigation/>

                <div className="wrapper">

                    <ul className="article-list">
                        {posts.map(({node}) => {
                            return (
                                <li key={node.slug}>
                                    <ArticlePreview article={node}/>
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <Navigation/>

            </div>
        )
    }
}

export default BouldernBoulderBoysVlog

export const pageQuery = graphql`
  query VlogQuery {
  
  allContentfulBlogPost(filter: {category: {contentful_id: {eq:"14c67jI28WqjAFNfWTgUbP"} } },
  sort: { fields: [publishDate], order: DESC })
  {
  
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
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
    allContentfulPerson(filter: { id: { eq: "c67mw0DGC5fIf8tnsoZ5v3q" } }) {
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
    allContentfulCategory(filter:{ contentful_id: {eq: "14c67jI28WqjAFNfWTgUbP"}}){
    edges{
      node{
        title
        }
    }
  }
  }
`
