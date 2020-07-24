import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Footer from "../components/footer";
import CategoryPreview from "../components/category-preview";

class Technik extends React.Component {
    render() {

        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allContentfulArticle.edges');
        const category = get(this, 'props.data.allContentfulCategory.edges');


        return (
            <div className="container">
                <Helmet title={siteTitle}/>
                <Navigation/>
                <div className="wrapper">

                    {category.map(({node}) => {
                        return (
                            <h1>{node.title}</h1>
                        )
                    })}

                    {category.map(({node}) => {
                        return (
                            <div dangerouslySetInnerHTML={{
                                __html: node.description.childMarkdownRemark.html,}}/>
                        )
                    })}

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

export default Technik
export const pageQuery = graphql`
  query Technikquery {
 
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
          picture {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
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
  allContentfulCategory(filter: {contentful_id: { eq: "tYDKdQwpe2Y3gQlOxODv8" } } ){
        edges{
            node{
                title
                description {
                    childMarkdownRemark {
                        html
                    }
                }
             }
        }
  } 
 }
`
