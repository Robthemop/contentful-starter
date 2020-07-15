import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Footer from "../components/footer";
import CategoryPreview from "../components/category-preview";


class Kletterhallen extends React.Component {
    render() {

        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allContentfulArticle.edges');
        const [author] = get(this, 'props.data.allContentfulPerson.edges');
        const category = get(this, 'props.data.allContentfulCategory.edges');

        return (
            <div className="container">
                <Helmet title={siteTitle}/>
                <Navigation/>
                <div className="wrapper">
                    {category.map(({node}) => {
                        return (
                            <h3>{node.title}</h3>
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
                                <li key={node.slug}><ArticlePreview article={node}/></li>
                            )
                        })}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Kletterhallen

export const pageQuery = graphql`
  query Spotsquery {
  
  allContentfulArticle(filter: {category: {contentful_id: {eq:"5Yqtk99s2c0YgC8QsMceGc"} } },
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
    allContentfulCategory(filter: {contentful_id: { eq: "5Yqtk99s2c0YgC8QsMceGc" } }) {
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
