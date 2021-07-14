import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Styles from '../templates/article.module.css'
import Link from "gatsby-link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Img from "gatsby-image";

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
                
                <div className="article-wrapper">
                  <Img alt="" sizes={article.picture.sizes}></Img>
                  <Link to={`/${article.category.slug}`}>
                    <h2>{`Zurück zu: ${article.category.title}`}</h2>
                  </Link>

                  <h1 className={Styles.title}>{article.title}</h1>
                                  
                    <div className={Styles.body}
                         dangerouslySetInnerHTML={{
                             __html: article.body.childMarkdownRemark.html,
                         }}
                    />
                    
                    <p className={Styles.author}>{article.author}</p>
                </div>
                
                <div className="bergfreunde-dynamic-xs">
                        <a href="http://www.bergfreunde.de/?pid=16093&amp;wt_mc=de.affiliate.qc.-.system.-&amp;utm_source=sonstige-affiliates&amp;utm_medium=cpo-variabel#Q2035C16093" 
                        rel="nofollow" 
                        title="Summer Sale 2021 - 250x250">
                            <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&amp;wmid=2035&amp;cpid=1&amp;prid=1&amp;subid=&amp;view=1&amp;target=https://www.bergfreunde-partner.de/banner/DE/2021_SommerSale/DE_Sommer%20Sale_2021_250x250.jpg" 
                            height="250" width="250" 
                            border="0" 
                            alt="Summer Sale 2021 - 250x250"/>
                        </a>
                    </div>
                
                <div className="bergfreunde-dynamic-xl">
                        <a href="http://www.bergfreunde.de/?pid=16093&wt_mc=de.affiliate.qc.-.system.-&utm_source=sonstige-affiliates&utm_medium=cpo-variabel#Q2033C16093" 
                        rel="nofollow" 
                        title="Summer Sale 2021 - 1200x628">
                            <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=2033&cpid=1&prid=1&subid=&view=1&target=https://www.bergfreunde-partner.de/banner/DE/2021_SommerSale/DE_Sommer%20Sale_2021_1200x628.jpg" 
                            height="628" 
                            width="1200" 
                            border="0" 
                            alt="Summer Sale 2021 - 1200x628" />
                        </a>                
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
        sizes(
          maxWidth: 3728
          maxHeight: 1200
          resizingBehavior: CROP
          ) {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      category {
        title
        slug
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