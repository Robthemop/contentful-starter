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
                <div className="bergfreunde-left">
                    <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154" title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen" rel="nofollow" target="_blank"><img src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_120x600.jpg" alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen" border="0" /></a><img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=31&cpid=1&prid=1&subid=&view=1" height="1" width="1" border="0" />
                </div>
  
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