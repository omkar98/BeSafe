import React from 'react';
import { View, TouchableHighlight, Image, TouchableNativeFeedback } from 'react-native';

import {
    Button,
    Input,
    Text,
    Icon
} from 'react-native-ui-kitten';


class ProfileComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
          <View style={{flex:1}}>
            <View>
                <Text style={{ textAlign: 'right', paddingTop: 30, paddingRight: 30 }}>Settings</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
                <Image style={{ height: 100, width: 100, marginBottom: 20 }} source={require('../../theme/icons/scb.png')} />
                <Text category='h1'>Profile</Text>
                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h6' style={{fontWeight:'bold'}}>Name:</Text>
                    <Text category='h6' style={{fontStyle: 'italic'}}>Nikhil Thakare</Text>
                </View>
                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h6' style={{fontWeight:'bold'}}>Phone Number:</Text>
                    <Text category='h6' style={{fontStyle: 'italic'}}>9145555755</Text>
                </View>
                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h6' style={{fontWeight:'bold'}}>Aadhar Id:</Text>
                    <Text category='h6' style={{fontStyle: 'italic'}}>72874792387652</Text>
                </View>
                <Button color='#91C740' style={{ margin: 10 }} onPress={() => {
                    this.props.navigation.navigate("LoginNavigator");
                }} status='success'>Logout </Button>

            </View>
            <View ><Text category='label' style={{textAlign: 'center', padding: 10, backgroundColor: '#91C740'}}>This App is designed and developed for Bhopal Smart City Hackthon 2.0 by Team Arcana.</Text></View>

          </View>
        )
    }
}

export const Profile = ProfileComponent
