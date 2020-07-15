import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import title from '../components/category-preview'
import Footer from "../components/footer";
import CategoryPreview from "../components/category-preview";
import styles from "../components/article-preview.module.css";
import Styles from "../templates/article.module.css";


class Kletterausrüstung extends React.Component {
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

export default Kletterausrüstung
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
    allContentfulCategory(filter: {contentful_id: { eq: "314YasijKUE4o8yIasyK4e" } }) {
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
