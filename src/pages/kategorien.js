import React from 'react'import Link from 'gatsby-link'import get from 'lodash/get'import Helmet from 'react-helmet'import Navigation from '../components/navigation'import ArticlePreview from "../components/category-preview";import category from '../components/category-preview.module.css';class Kategorien extends React.Component {    render() {        const siteTitle = get(this, 'props.data.site.siteMetadata.title')        const category = get(this, 'props.data.allContentfulCategory.edges')        return (            <div style={{background: '#FFF'}}>                <Helmet>                    <title>Boulder Boys - Kategorien</title>                    <meta charSet="utf-8" />                    <meta name="description" content="bouldern wo, boulder tipps, boulder ausrüstung, boulder boys vlog"/>                </Helmet>                <div style={{textAlign: 'justify'}}>                    <Navigation/>                    <div className="wrapper">                        <h2 className="section-headline">Wähle eine Kategorie</h2>                        <ul className="category-list">                            {category.map(({node}) => {                                return (                                    <li key={node.slug}>                                        <ArticlePreview category={node}/>                                    </li>                                )                            })}                        </ul>                    </div>                </div>            </div>        )    }}export default Kategorienexport const pageQuery = graphql`  query KategorienQuery {    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {      edges {        node {          name          heroImage: image {            sizes(              maxWidth: 3728              maxHeight: 2376              resizingBehavior: PAD              background: "rgb:FFFFFF"            ) {              ...GatsbyContentfulSizes_tracedSVG            }          }        }      }    }    allContentfulCategory{    edges{        node{            title            categoryImage {            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {             ...GatsbyContentfulSizes_tracedSVG            }          }         }     }    }  }`