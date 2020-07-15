import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Styles from '../templates/article.module.css'
import Link from "gatsby-link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

class ArticleTemplate extends React.Component {
    render() {
        const article = get(this.props, 'data.contentfulArticle');

        return (
            <div className="container">
                <Navigation/>
                <div className="article-wrapper">
                    <Helmet title={`${article.title} | ${article.category.title}`}/>
                    <Link to={`/${article.category.title}/`}>
                        <li className={Styles.breadcrumb}>{article.category.title}</li>
                    </Link>
                    <h1 className={Styles.title}>{article.title}</h1>
                    <div className={Styles.body}
                         dangerouslySetInnerHTML={{
                             __html: article.body.childMarkdownRemark.html,
                         }}
                    />
                    <p className={Styles.author}>{article.author}</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ArticleTemplate
export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
      picture {
        sizes(maxWidth: 400 maxHeight: 400 resizingBehavior: PAD background: "rgb:255255") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      category {
        title
      }
      author
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
    }
`