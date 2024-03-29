import React from 'react'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from "../components/footer";

class Impressum extends React.Component {
    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>Boulder Boys - Impressum</title>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="Mein Impressum"/>
                </Helmet>
                <div style={{textAlign: 'justify'}}>
                    <div className="wrapper">
                    <Navigation/>

                        <h1>Impressum</h1>
                        <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
                        <p>Robin Hess<br/>
                            Rochusstraße 94<br/>
                            53123 Bonn</p>
                        <h3>Kontakt</h3>
                        <p>E-Mail: 1robinhess@gmail.com</p>
                        <h3>Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV</h3>
                        <p>Robin Hess<br/>
                            Rochusstraße 94<br/>
                            53123 Bonn</p>
                        <h3>Haftung f&uuml;r Inhalte</h3>
                        <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene
                            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8
                            bis 10 TMG sind wir als
                            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde
                            Informationen zu &uuml;berwachen
                            oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
                            hinweisen.</p>
                        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                            allgemeinen
                            Gesetzen bleiben hiervon unber&uuml;hrt.
                            Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                            konkreten
                            Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                            werden wir diese Inhalte
                            umgehend entfernen.</p>
                        <h3>Haftung f&uuml;r Links</h3>
                        <p>Unser Angebot enth&auml;lt Links zu externen Websites
                            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese
                            fremden Inhalte auch
                            keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der
                            jeweilige Anbieter
                            oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                            Verlinkung auf m&ouml;gliche
                            Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                            Verlinkung
                            nicht erkennbar.</p>
                        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                            Anhaltspunkte einer
                            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                            derartige Links
                            umgehend entfernen.</p>
                        <h3>Urheberrecht</h3>
                        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                            dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art
                            der
                            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen
                            Zustimmung des
                            jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
                            privaten, nicht
                            kommerziellen Gebrauch gestattet.</p>
                        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                            werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten
                            Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                            entsprechenden Hinweis.
                            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
                            entfernen.</p>
                        <p>Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600
                            Amphitheatre
                            Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der Websitebenutzung durch
                            Nutzer. Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert
                            werden. Die durch die Cookies gesammelten Informationen werden im Regelfall an einen
                            Google-Server in den USA gesandt und dort gespeichert.
                            Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird
                            innerhalb der Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum gekürzt.
                            Durch diese Kürzung entfällt der Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung
                            zur Auftragsdatenvereinbarung, welche die Websitebetreiber mit der Google Inc. geschlossen
                            haben, erstellt diese mithilfe der gesammelten Informationen eine Auswertung der
                            Websitenutzung
                            und der Websiteaktivität und erbringt mit der Internetnutzung verbundene Dienstleistungen.
                            Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern,
                            indem Sie in Ihrem Browser entsprechende Einstellungen vornehmen. Es ist nicht
                            gewährleistet,
                            dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können,
                            wenn Ihr Browser keine Cookies zulässt.
                            Weiterhin können Sie durch ein Browser-Plugin verhindern,
                            dass die durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse)
                            an die Google Inc. gesendet und von der Google Inc. genutzt werden.<a
                                href="https://tools.google.com/dlpage/gaoptout?hl=de">
                                Folgender
                                Link führt Sie zu dem entsprechenden Plugin.</a>
                            Hier finden Sie weitere Informationen zur Datennutzung durch
                            die Google Inc.: <a href="https://support.google.com/analytics/answer/6004245?hl=de">Google-Support
                            </a></p>
                        <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
                        <h3>Affiliate Links</h3>
                        <p>Auf dieser Seite befinden sich Affiliate Links in den einzelnen Blog-Artikeln, sowie
                            Affiliate Werbebanner. In diesem Rahmen nehme
                            ich an dem Amazon Partnerprogramm und an dem Bergfreunde Partnerprogramm teil.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Impressum