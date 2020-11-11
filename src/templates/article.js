import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Styles from '../templates/article.module.css'
import Link from "gatsby-link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

class ArticleTemplate extends React.Component {
    render() {
        const article = get(this.props, 'data.contentfulArticle');

        return (
            <div className="container">
                <Helmet>
                    <html lang="de"></html>
                    <title>{`${article.title} | ${article.category.title}`}</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content={`${article.metaDescription}`}/>
                </Helmet>

                <div className="bergfreunde-left">
                    <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154" title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen" rel="nofollow" target="_blank"><img src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_120x600.jpg" alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen" border="0" /></a><img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=31&cpid=1&prid=1&subid=&view=1" height="1" width="1" border="0" />
                </div>

                <div className="article-wrapper">
                  <Navigation/>
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
      metaDescription
      description {
            childMarkdownRemark {
              html
            }
          }
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