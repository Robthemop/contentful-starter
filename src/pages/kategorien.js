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
                    sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: PAD) {
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
