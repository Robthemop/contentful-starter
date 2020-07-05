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
                <form action="/kontakt" name="kontakt" method="POST" data-netlify="true">
                    <p>
                        <label>
                            Name
                            <br/>
                            <input type="text" name="name"/>
                        </label>
                    </p>
                    <p>
                        <label>
                            E-mail
                            <br/>
                            <input type="email" name="email"/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Deine Nachricht
                            <br/>
                            <textarea name="message"/>
                        </label>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>

            <Footer/>

        </div>
    }
}
export default Kontakt