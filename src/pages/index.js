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

                <div className="home-title-container">
                    <h1 className="home-title">Boulder Boys</h1>
                </div>

                <div className="intro-text-container">
                    <p className="intro-text">
                        Du bekommst schon vom bloßen Gedanken an bouldern schwitzige Hände? Dann bist du hier genau richtig!
                        Lies dir meine ausführlichen Reviews zu den coolsten Kletterhallen durch. Oder erfahre, wie du eine saubere Klettertechnik entwickelst. So wird es dir ein leichtes sein, die Klettergriffe zu bezwingen.
                        Außerdem bewerte ich für dich meine Kletterausrüstung und Kletterschuhe. Und erkläre dir, worauf du beim Kauf achten solltest.
                        Auch in meinen Videos kannst du neues über das Klettern lernen oder aber einfach mal chillen und nur zuschauen.
                    </p>
                    <p style={{fontWeight: "bold"}}>Robin Hess</p>
                </div>

                <div className="social-icons-desktop">
                    <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" bgColor="#000"/>
                    <SocialIcon url="http://instagram.com/boulderboysyt" bgColor="#000"/>
                    <SocialIcon url="https://www.facebook.com/boulderobin/" bgColor="#000"/>
                </div>

                <div className="social-icons-mobile">
                    <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" bgColor="#000" style={{ height: 35, width: 35 }}/>
                    <SocialIcon url="http://instagram.com/boulderboysyt" bgColor="#000" style={{ height: 35, width: 35 }}/>
                    <SocialIcon url="https://www.facebook.com/boulderobin/" bgColor="#000" style={{ height: 35, width: 35 }}/>
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

                <div className="wrapper--index">

                    <h2>Kategorien</h2>

                    <ul className="category-list">
                        {category.map(({node}) => {
                            return (
                                <li key={node.slug}>
                                    <CategoryPreview category={node}/>
                                </li>
                            )
                        })}
                    </ul>

                    <h2>Neue Artikel</h2>

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
  limit: 4
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
                description {
                    childMarkdownRemark {
                        html
                    }
                    }
         }
       }
    }
 }
`;