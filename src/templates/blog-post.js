import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import ArticlePreview from "../components/article-preview";

class BlogPostTemplate extends React.Component {
    render() {

        const category = get(this.props, 'data.contentfulCategory');
        const posts = get(this, 'props.data.allContentfulArticle.edges');

        return (
            <div className="container">
                <Helmet>
                    <html lang="de"></html>
                    <title>{category.title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content={`${category.metaDescription}`}/>
                </Helmet>
                <div className="wrapper">
                <Navigation/>
                    <h1>{category.title}</h1>
                    <div dangerouslySetInnerHTML={{
                             __html: category.description.childMarkdownRemark.html,
                         }}
                    />
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

export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    allContentfulArticle(filter: {category: {slug: { eq: $slug } }}
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
    contentfulCategory(slug: { eq: $slug }) {
      title
      slug
      metaDescription
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
`