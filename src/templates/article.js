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
                <Helmet>
                    <html lang="de"></html>
                    <title>{`${article.title} | ${article.category.title}`}</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content="Boulder Boys ist ein Blog für Boulder Anfänger und Fortgeschrittene."/>
                </Helmet>
                <Navigation/>
                <div className="article-wrapper">
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

                <a className="banner-image-desktop"
                   href="http://www.bergfreunde.de/#Q1322C16093"
                   rel="nofollow"
                   title="SummerSale 2020 970x250">
                    <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=1322&cpid=1&prid=1&subid=&view=1&target=https://www.bergfreunde-partner.de/banner/DE/SummerSale2020/DE_SummerSale_2020_970x250.jpg"
                         height="250"
                         width="970"
                         border="0"
                         alt="SummerSale 2020 970x250" />
                </a>

                <a className="banner-image-mobile"
                   href="http://www.bergfreunde.de/#Q1327C16093"
                   rel="nofollow"
                   title="SummerSale 2020 200x200 1">
                    <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=1327&cpid=1&prid=1&subid=&view=1&target=https://www.bergfreunde-partner.de/banner/DE/SummerSale2020/DE_SummerSale_2020_200x200_1.jpg"
                         height="200"
                         width="200"
                         border="0"
                         alt="SummerSale 2020 200x200 1" />
                </a>
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