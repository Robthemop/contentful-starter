import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Footer from '../components/footer';
import CategoryPreview from "../components/category-preview";
import ArticlePreview from "../components/article-preview";
import styles from "../components/category-preview.module.css";
import {SocialIcon} from "react-social-icons";
import Link from "gatsby-link";

class RootIndex extends React.Component {
    render() {

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
                    <ul className="category-list">
                        {category.map(({node}) => {
                            return (
                                <li key={node.title}>
                                    <CategoryPreview category={node}/>
                                </li>
                            )
                        })}

                        {/*<Link to="/"><li><h2 className={styles.categoryTitle}>Aktivismus</h2></li></Link>
                        <Link to="/"><li><h2 className={styles.categoryTitle}>Rechner</h2></li></Link>*/}

                        <Link to="/kontakt"><li><h2 className={styles.categoryTitle}>Kontakt</h2></li></Link>

                    </ul>

                    <div className="social-icons-top">
                        <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" className="socialIcon"/>
                        <SocialIcon url="http://instagram.com/boulderboysyt" className="socialIcon"/>
                        <SocialIcon url="https://www.facebook.com/boulderobin/" className="socialIcon"/>
                        <SocialIcon url="https://twitter.com/Boulderboys1" className="socialIcon"/>
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
          picture {
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
`;