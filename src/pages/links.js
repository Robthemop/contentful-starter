import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import Hero from '../components/hero'


class Links extends React.Component {


    render() {

        const [author] = get(this, 'props.data.allContentfulPerson.edges')


        return (
            <div style={{background: '#FFF'}}>
                <Helmet>
                    <title>Boulder Boys - Linksammlung</title>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="SocialMedia und Websitelinks"/>
                </Helmet>
                <div style={{textAlign: 'justify'}}>

                    <Hero data={author.node}/>

                    <div className="wrapper">

                        <Link to={`/`}>
                            <h1>
                                Alle Blogposts
                            </h1>
                        </Link>

                        <Link to={`/bouldern-boulder-boys-vlog`}>
                            <h1>
                                Alle Vlogs
                            </h1>
                        </Link>

                        <Link to={`/impressum`}>
                            <h1>
                                Impressum
                            </h1>
                        </Link>

                        <Link to={`/contact`}>
                            <h1>
                                Kontakt
                            </h1>
                        </Link>

                        <Navigation/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Links

export const pageQuery = graphql`
    query LinksQuery {
        allContentfulPerson(filter: {id: {eq: "c15jwOBqpxqSAOy2eOO4S0m"}}) {
        edges {
        node {
        name
        heroImage: image {
        sizes(
        maxWidth: 3728
        maxHeight: 2376
        resizingBehavior: PAD
        background: "rgb:FFFFFF"
        ) {
        ...GatsbyContentfulSizes_tracedSVG
    }
    }
    }
    }
    }
    }
    `
