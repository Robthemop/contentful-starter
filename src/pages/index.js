import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Footer from '../components/footer';
import CategoryPreview from "../components/category-preview";
import ArticlePreview from "../components/article-preview";

class RootIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const category = get(this, 'props.data.allContentfulCategory.edges');
        const posts = get(this, 'props.data.allContentfulArticle.edges');


        return (
            <div className="container">
                <Helmet>
                    <title>Boulder Boys</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content="Boulder Boys ist ein Blog für Boulder Anfänger und Fortgeschrittene."/>
                </Helmet>
                <div className="wrapper--index">
                    <div className="iframe-box">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7kX4YxDzDE"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
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
                <Footer/>
            </div>


        )
    }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
  allContentfulArticle(
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
          heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
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
    allContentfulCategory{
    edges{
        node{
            title
            categoryImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
         }
     }
    }
  }
`