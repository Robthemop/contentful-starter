import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Navigation from '../components/navigation'
import heroPictureStyles from '../components/heropicture.module.css'
import pictureStyles from '../components/picture.module.css'
import Link from "gatsby-link";
import Hero from "../components/hero";


class ArticleTemplate extends React.Component {
    render() {
        const article = get(this.props, 'data.contentfulArticle')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <div style={{background: '#FFF'}}>

                <div className="wrapper">

                    <div>
                        <Link to={`/${article.category.title}`}
                              style={{textDecoration: 'none'}}>
                            <h2 className="section-headline">{article.category.title}</h2>
                        </Link>
                    </div>

                    <Navigation/>

                    <Helmet title={`${article.title} | ${article.category.title}`}/>

                    <h2>{article.title}</h2>


                    <div className={pictureStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: article.body.childMarkdownRemark.html,
                         }}
                    />

                    <div className={pictureStyles.picture}>
                        <Img className={pictureStyles.pictureImg} alt={article.title} sizes={article.pictureOne.sizes}/>
                    </div>

                    <div className={pictureStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: article.bodyTwo.childMarkdownRemark.html,
                         }}
                    />

                    <div className={pictureStyles.picture}>
                        <Img className={pictureStyles.pictureImg} alt={article.title} sizes={article.pictureTwo.sizes}/>
                    </div>

                    <div className={pictureStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: article.bodyThree.childMarkdownRemark.html,
                         }}
                    />

                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h2 className="section-bottomLine">Alle Kategorien anzeigen</h2>
                    </Link>

                </div>
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
      pictureOne {
        sizes(maxWidth: 4000, background: "rgb:255255") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      bodyTwo {
        childMarkdownRemark {
          html
        }
      }
      pictureTwo {
        sizes(maxWidth: 4000, background: "rgb:255255") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      bodyThree {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: PAD) {
             ...GatsbyContentfulSizes_tracedSVG
            }
      }
      category{
        title
      }
    }
  }
`