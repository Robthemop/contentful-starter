import React from 'react'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from "../components/footer";

class Kontakt extends React.Component {
    render() {
        return <div className="container">

            <Helmet>
                <title>Boulder Boys - Kontakt</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Mein Impressum"/>
            </Helmet>

            <Navigation/>

            <div className="wrapper">
                <h1>schreib mir eine Nachricht.</h1>
                <form data-netlify="true">
                        <label>
                            Name
                            <br/>
                            <input type="text"/>
                        </label>
                    <br/>
                        <label>
                            E-mail
                            <br/>
                            <input type="email"/>
                        </label>
                    <br/>
                        <label>
                            Deine Nachricht
                            <br/>
                            <textarea/>
                        </label>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>

            <Footer/>

        </div>
    }
}
export default Kontakt