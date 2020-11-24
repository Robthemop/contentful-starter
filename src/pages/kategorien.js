import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import CategoryPreview from "../components/category-preview";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

class Kategorien extends React.Component {
    render() {
        const category = get(this, 'props.data.allContentfulCategory.edges')
        return (
            <div className="container">
                <Helmet>
                    <title>Boulder Kategorien Boulder Tipps Boulder Ausrüstung Boulder Boys Vlog</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content="bouldern wo, boulder tipps, boulder ausrüstung, boulder boys vlog"/>
                </Helmet>
                <div className="wrapper">
                        <Navigation/>
                        <div className="bergfreunde-dynamic-mobile">
                            <div>
                                <a href="https://www.bergfreunde-partner.de/banner/dynamisch/dyn.php" title="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor" rel="nofollow" target="_blank"><img src="https://www.bergfreunde-partner.de/banner/bergfreunde.jpg" alt="Bergfreunde.de - Ausrüstung für Klettern, Bergsport und Outdoor" border="0" /></a><img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=168&cpid=1&prid=1&subid=&view=1" height="1" width="1" border="0" />
                            </div>
                        </div>
                            <ul className="category-list">
                                {category.map(({node}) => {
                                return (
                                    <li key={node.slug}>
                                        <CategoryPreview category={node}/>
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

export default Kategorien
export const pageQuery = graphql`
  query KategorienQuery {
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
