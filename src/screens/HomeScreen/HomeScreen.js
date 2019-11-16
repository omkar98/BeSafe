

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import RNLocation from 'react-native-location';

RNLocation.configure({
    distanceFilter: 5.0
})


class HomeScreenComponent extends React.Component {

    render = () => {
        return (
            <View>
                <Text> This will be HomeScreen screen </Text>

                <TouchableHighlight onPress={() => {
                    RNLocation.requestPermission({
                        ios: "whenInUse",
                        android: {
                            detail: "coarse"
                        }
                    }).then(granted => {
                        if (granted) {
                            this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
                                console.log('locations', locations);

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
                    })
                }}>
                    <Text>I am in trouble</Text>

                </TouchableHighlight>
            </View>


        )
    }
}

export const HomeScreen = HomeScreenComponent