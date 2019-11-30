

import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import RNLocation from 'react-native-location';
import MapView, { Marker } from 'react-native-maps';
import {
    Button,
    Input,
    Text,
    Icon
} from 'react-native-ui-kitten';


RNLocation.configure({
    distanceFilter: 5.0
})
let mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

class HomeComponent extends React.Component {

    state = {
        mylocation: null,
        nearByPeople: [],
        delta: {
            latitudeDelta: 0.0000,
            longitudeDelta: 0.000,
        }
    }

// localhost port: Sangamesh: 3000 | Omkar: 8081
    componentDidMount = () => {
        setInterval(() => {
            fetch('http://localhost:3000/location/getlocations', { method: "GET" }).then((response) => {
                response.json().then((locations) => {
                    console.log('locations api response', locations);
                }).catch((error) => {
                    console.log('getlocations error while parsing', JSON.stringify(error))
                })
            }).catch((error) => {
                console.log('getlocations failed', JSON.stringify(error));
                console.log('we are here');
            })

        }, 3000);

        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse"
            }
        }).then(granted => {
            if (granted) {
                this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
                    console.log('locations', locations);
                    this.setState({ mylocation: locations[0] })

                    /* Example location returned
                    {
                      speed: -1,
                      longitude: -0.1337,
                      latitude: 51.50998,
                      accuracy: 5,
                      heading: -1,
                      altitude: 0,
                      altitudeAccuracy: -1
                      floor: 0
                      timestamp: 1446007304457.029,
                      fromMockProvider: false
                    }
                    */
                })
            }
        });
    }
    render = () => {
        console.log('nearByPeople', this.state.nearByPeople);
        return (
            <View style={{ flex: 1 }}>
                {this.state.mylocation != null &&
                    <MapView
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                        initialRegion={{ ...this.state.mylocation, ...this.state.delta }}
                        customMapStyle={mapStyle}

                    >

                        {
                            this.state.nearByPeople.map((nearByPerson) => {
                                return (
                                    <Marker
                                        draggable
                                        coordinate={{ ...nearByPerson }}
                                        onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                                        title={'You'}
                                        description={'This is your location'}
                                    >
                                        <View style={{ backgroundColor: "transparent" }}>
                                            <Image style={{ height: 60, width: 60 }} source={require('../../theme/icons/mario.png')} />
                                        </View>
                                    </Marker>
                                )
                            })
                        }
                        <Marker
                            draggable
                            coordinate={{ ...this.state.mylocation }}
                            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                            title={'You'}
                            description={'This is your location'}
                        />
                    </MapView>

                }


                <Button style={{
                    alignSelf: "center", position: 'absolute',
                    bottom: 0, margin: 20
                }}

                    onPress={() => {
                        this.setState({
                            nearByPeople: [
                                {
                                    latitude: 23.26700000,
                                    longitude: 77.36003900
                                },
                                {
                                    latitude: 23.26700900,
                                    longitude: 77.36858900
                                },
                                {
                                    latitude: 23.26700100,
                                    longitude: 77.36412900
                                }
                            ]
                        })
                    }} status='danger'>I am in trouble </Button>
            </View>


        )
    }
}

export const Home = HomeComponent
