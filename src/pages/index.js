import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Footer from '../components/footer';
import CategoryPreview from "../components/category-preview";
import ArticlePreview from "../components/article-preview";
import {SocialIcon} from "react-social-icons";

class RootIndex extends React.Component {
    render() {

        const category = get(this, 'props.data.allContentfulCategory.edges');
        const posts = get(this, 'props.data.allContentfulArticle.edges');

        return (
            <div className="container">

                <Helmet>
                    <html lang="de"></html>
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
                        Du bekommst schon vom bloßen Gedanken an Bouldern schwitzige Hände? Dann bist du hier genau richtig!
                        Erfahre, wie du eine saubere Klettertechnik entwickelst. So wird es dir ein leichtes sein, die Klettergriffe zu bezwingen.
                        Außerdem bewerte ich für dich meine Kletterausrüstung und Kletterschuhe. Und erkläre dir, worauf du beim Kauf achten solltest. 
                        Auch in meinen <a href="https://www.youtube.com/c/BoulderBoys" target="_blank">Boulder Boys Videos</a> kannst du neues über das Klettern lernen oder aber einfach mal chillen und nur zuschauen.
                        Wenn du ein Blick hinter die Kulissen, in mein Leben werfen willst, dann schau auf meinem <a href="https://www.instagram.com/boulderboys.de/" target="_blank">Instagram Profil</a> vorbei. 
                    </p>
                    <p style={{fontWeight: "bold"}}>Robin Hess</p>
                </div>

                <div className="wrapper--index">

                    <h2 className="headline-index">Kategorien</h2>

                    <ul className="category-list">
                        {category.map(({node}) => {
                            return (
                                <li key={node.slug}>
                                    <CategoryPreview category={node}/>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="bergfreunde-dynamic-mobile">
                        <div>
                            <a href="https://www.bergfreunde-partner.de/banner/dynamisch/dyn.php" title="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor" rel="nofollow" target="_blank"><img src="https://www.bergfreunde-partner.de/banner/bergfreunde.jpg" alt="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor" border="0" /></a><img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=168&cpid=1&prid=1&subid=&view=1" height="1" width="1" border="0" />
                        </div>
                    </div>

                    <h2 className="headline-index">Neue Artikel</h2>

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
  limit: 6
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
    allContentfulCategory{
        edges{
         node{
            title
            slug
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
`