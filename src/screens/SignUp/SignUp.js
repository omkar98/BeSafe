

import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import {
    Button,
    Input,
    Text
} from 'react-native-ui-kitten';



class SignUpComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>

                <Image style={{ height: 50, width: 50, marginBottom: 5 }} source={require('../../theme/icons/sih.png')} />


                <View style={{ margin: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h1'>Be Safe</Text>
                    <Text category='h6'>Make india safer, Together!</Text>

                </View>


                <Input
                    style={{ marginBottom: 10 }}
                    value={this.state.firstName}
                    size='small'
                    onChangeText={(firstName) => {
                        this.setState({ firstName })
                    }}
                    placeholder='First Name'
                />
                <Input
                    style={{ marginBottom: 10 }}
                    value={this.state.lastName}
                    size='small'
                    onChangeText={(lastName) => {
                        this.setState({ lastName })
                    }}
                    placeholder='Last Name'
                />
                <Input
                    style={{ marginBottom: 10 }}
                    value={this.state.emailId}
                    size='small'
                    onChangeText={(emailId) => {
                        this.setState({ emailId })
                    }}
                    placeholder='Email Id'
                />
                <Input
                    style={{ marginBottom: 10 }}
                    value={this.state.phoneNumber}
                    size='small'
                    onChangeText={(phoneNumber) => {
                        this.setState({ phoneNumber })
                    }}
                    placeholder='Phone Number'
                />
                <Input
                    style={{ marginBottom: 10 }}
                    value={this.state.aadharId}
                    size='small'
                    onChangeText={(aadharId) => {
                        this.setState({ aadharId })
                    }}
                    placeholder='Aadhar Id'
                />
                <Input
                    style={{ marginBottom: 10 }}
                    value={this.state.password}
                    size='small'
                    onChangeText={(password) => {
                        this.setState({ password })
                    }}
                    placeholder='Password'
                />

                {/* <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}> */}

                <Button style={{ margin: 10 }} onPress={() => {
                    this.props.navigation.navigate("HomeNavigator");
                }} status='success'>Register</Button>

                {/* </View> */}

                <Text style={{ paddingTop: 5 }} category='h6'> Developed by Team Arcana </Text>

            </View>
        )
    }
}

export const SignUp = SignUpComponent