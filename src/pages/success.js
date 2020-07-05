import React from 'react'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from "../components/footer";

class Success extends React.Component {
    render() {
        return <div className="container">

            <Helmet>
                <title>Boulder Boys - Success</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="success"/>
            </Helmet>

            <Navigation/>

            <div className="wrapper">
                <h1>Danke für deine Nachricht.</h1>
            </div>

            <Footer/>

        </div>
    }
}
export default Success