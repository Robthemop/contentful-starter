const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators

    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
    const vlogs =
        graphql(
            `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
        ).then(result => {
            if (result.errors) {
                console.log(result.errors);
                Promise.reject(result.errors);
            }

            const posts = result.data.allContentfulBlogPost.edges
            posts.forEach((post, index) => {
                createPage({
                    path: `/blog/${post.node.slug}`,
                    component: blogPostTemplate,
                    context: {
                        slug: post.node.slug
                    },
                })
            })
        })

    const articlePostTemplate = path.resolve('./src/templates/article.js')
    const blogs =
        graphql(
            `
          {
            allContentfulArticle {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
        ).then(result => {
            if (result.errors) {
                console.log(result.errors);
                Promise.reject(result.errors);

            }

            const articles = result.data.allContentfulArticle.edges
            articles.forEach((article, index) => {
                createPage({
                    path: `/blog/${article.node.slug}`,
                    component: articlePostTemplate,
                    context: {
                        slug: article.node.slug
                    },
                })
            })
        })
return Promise.all([blogs, vlogs]);
}