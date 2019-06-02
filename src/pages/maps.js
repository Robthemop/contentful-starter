import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import get from 'lodash/get'
import Navigation from "../components/navigation";
import Helmet from 'react-helmet'
import styles from '../components/navigation.module.css'
import {css} from "emotion";

const mapStyles = {
    width: '100%',
    height: '82%'
};

const color = '#F1582A'


export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '{"lat": 50.9333300, "lng": 6.9500000}',
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},       //Shows the infoWindow to the selected place upon a marker
            selectedGymName: 'Boulders Habitat Bonn Test',
            selectedAddress: '',
            selectedCategory: '',
            selectedWebsite: '',
            centerPosition: {lat: 50.743417, lng: 10.071917},
            zoom: 6,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            selectedAddress: marker.address,
            selectedCategory: marker.category,
            selectedWebsite: marker.website,
            centerPosition: marker.position,
            zoom: 14

        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: 'no active marker'
            });
        }
    }

    zoomOut = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: 'no active marker'
            });
        }
        this.setState({
            zoom: 6,
            centerPosition: {lat: 51.043417, lng: 10.071917},

        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let json = this.state.value;
        let obj = JSON.parse(json);
        this.setState({centerPosition: {lat: obj.lat, lng: obj.lng},
        zoom: 10});
        event.preventDefault();
    }


    render() {
        const kletterhalle = get(this, 'props.data.allContentfulKletterhallen.edges');
        return (
            <div style={{background: '#fff', justifyContent: "center"}}>
                <Helmet>
                    <title>Boulder Boys</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content="Boulder Boys ist ein Blog für Boulder Anfänger und Fortgeschrittene."/>
                </Helmet>
                <Navigation/>
                <ul className={styles.navigation}>
                    <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <select value={this.state.value} onChange={this.handleChange} style={styles.select}>
                                    <option value='{"lat": 50.9333300, "lng": 6.9500000}'>Köln</option>
                                    <option value='{"lat": 52.518611, "lng": 13.408333}'>Berlin</option>
                                    <option value='{"lat": 53.550556, "lng": 9.993333}'>Hamburg</option>
                                    <option value='{"lat": 48.135125, "lng": 11.581981}'>München</option>
                                </select>
                            </label>
                            <input type="submit" value="Los" />
                        </form>
                    </li>
                    <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                        <button className="button" onClick={this.zoomOut}>
                            zoom out
                        </button>
                    </li>
                </ul>


                <Map
                    google={this.props.google}
                    zoom={this.state.zoom}
                    style={mapStyles}
                    center={this.state.centerPosition}
                    initialCenter={{lat: 51.043417, lng: 10.071917}}
                >

                    {kletterhalle.map(({node}) => {
                        return (
                            <Marker
                                onClick={this.onMarkerClick}
                                name={node.title}
                                position={node.position}
                                address={node.address}
                                category={node.category}
                                website={node.website}

                            />
                        )
                    })}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                        color={"black"}
                    >
                        <div>

                        <h4>{this.state.selectedPlace.name}</h4>
                            <h4>{this.state.selectedAddress}</h4>
                            <h4>{this.state.selectedCategory}</h4>
                            <a href={this.state.selectedWebsite} target="_blank">
                                {this.state.selectedWebsite}
                            </a>
                        </div>
                    </InfoWindow>

                </Map>
            </div>

        );
    }
}

export const pageQuery = graphql`
  query MapsQuery {
        allContentfulKletterhallen{
    edges{
      node{
        title
        position{
          lat
          lng
        }
        address
        category
        website
      }
    }
  }
  }
`

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMIskPy2dydZfcGPRJ9JlpDRVg5YirGRk'
})(MapContainer);