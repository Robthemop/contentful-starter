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

                <div className="bergfreunde-left">
                    <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154" title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen" rel="nofollow" target="_blank"><img src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_120x600.jpg" alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen" border="0" /></a><img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=31&cpid=1&prid=1&subid=&view=1" height="1" width="1" border="0" />
                </div>

                <div className="home-title-container">
                    <h1 className="home-title">Boulder Boys</h1>
                </div>

                <div className="intro-text-container">
                    <p className="intro-text">
                        Du bekommst schon vom bloßen Gedanken an bouldern schwitzige Hände? Dann bist du hier genau richtig!
                        Lies dir meine ausführlichen Reviews zu den coolsten Kletterhallen durch. Oder erfahre, wie du eine saubere Klettertechnik entwickelst. So wird es dir ein leichtes sein, die Klettergriffe zu bezwingen.
                        Außerdem bewerte ich für dich meine Kletterausrüstung und Kletterschuhe. Und erkläre dir, worauf du beim Kauf achten solltest.
                        Auch in meinen Boulder Boys Videos kannst du neues über das Klettern lernen oder aber einfach mal chillen und nur zuschauen.
                    </p>
                    <p style={{fontWeight: "bold"}}>Robin Hess</p>
                </div>

                <div className="social-icons-desktop">
                    <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" bgColor="#000"/>
                    <SocialIcon url="http://instagram.com/boulderboys.de" bgColor="#000"/>
                </div>

                <div className="social-icons-mobile">
                    <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" bgColor="#000" style={{ height: 50, width: 50 }}/>
                    <SocialIcon url="http://instagram.com/boulderboysyt" bgColor="#000" style={{ height: 50, width: 50 }}/>
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
`