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
                        Wenn du ein Blick hinter die Kulissen, in mein Leben werfen willst, dann schau auf meinem <a href="https://www.instagram.com/boulderobin/" target="_blank">Instagram Profil</a> vorbei. - Robin Hess
                    </p>
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