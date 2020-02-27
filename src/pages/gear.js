import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import title from '../components/category-preview'
import Footer from "../components/footer";
import CategoryPreview from "../components/category-preview";


class Gear extends React.Component {
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
                    <ul className="category-list">
                        {category.map(({node}) => {
                            return (
                                <li key={node.title}>
                                    <CategoryPreview category={node}/>
                                </li>
                            )
                        })}
                    </ul>
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

export default Gear
export const pageQuery = graphql`
  query EquipmentQuery {
 
  allContentfulArticle(filter: {category: {contentful_id: {eq:"314YasijKUE4o8yIasyK4e"} } },
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
