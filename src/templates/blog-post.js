import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import heroStyles from '../components/hero.module.css'
import Link from "gatsby-link";
import Footer from "../components/footer";
import Hero from "../components/hero";

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost')
        const [author] = get(this, 'props.data.allContentfulPerson.edges');

        return (
            <div style={{background: '#FFF'}}>
                <div className="wrapper">
                    <div>
                        <Link to={`/${post.category.title}/`}
                              style={{textDecoration: 'none'}}>
                            <h2 className="section-headline">{post.category.title}</h2>
                        </Link>
                    </div>
                    <Helmet title={`${post.title} | ${post.category.title}`}/>
                    <Hero data={author.node}/>
                    <h2>{post.title}</h2>
                    <div className={heroStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: post.body.childMarkdownRemark.html,
                         }}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      
      category{
        title
      }
      
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:255255") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      
      body {
        childMarkdownRemark {
          html
        }
      }
      
    }
  }
`