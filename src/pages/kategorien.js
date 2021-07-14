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
