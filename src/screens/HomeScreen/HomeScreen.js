

import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import RNLocation from 'react-native-location';
import MapView, { Marker } from 'react-native-maps';


RNLocation.configure({
    distanceFilter: 5.0
})
let mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];

class HomeScreenComponent extends React.Component {

    state = {
        mylocation: null,
        nearByPeople: [],
        delta: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }


    componentDidMount = () => {
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
                                        title={'Test Marker'}
                                        description={'This is a description of the marker'}
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
                            title={'Test Marker'}
                            description={'This is a description of the marker'}
                        />
                    </MapView>

                }


                <TouchableHighlight style={{
                    alignSelf: "center", position: 'absolute',
                    bottom: 0, padding: 10, margin: 10, borderRadius: 40, borderWidth: 1, backgroundColor: "gray"
                }} onPress={() => {

                    this.setState({
                        nearByPeople: [
                            {
                                latitude: 18.53,
                                longitude: 73.88
                            },
                            {
                                latitude: 18.53,
                                longitude: 73.88
                            },
                            {
                                latitude: 18.53,
                                longitude: 73.88
                            }
                        ]
                    })
                    // this.re();

                }}>
                    <Text >I am in trouble</Text>

                </TouchableHighlight>
            </View>


        )
    }
}

export const HomeScreen = HomeScreenComponent