

import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import {
    Button,
    Input,
    Text,
    Icon
} from 'react-native-ui-kitten';


class LoginComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>

                <Image style={{ height: 150, width: 150, marginBottom: 20 }} source={require('../../theme/icons/sih.png')} />


                <View style={{ margin: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text category='h1'>Be Safe</Text>
                    <Text category='h6'>Make india safer, Together!</Text>

                </View>


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
                    value={this.state.password}
                    size='small'
                    onChangeText={(password) => {
                        this.setState({ password })
                    }}
                    placeholder='Password'
                />

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <Button style={{ margin: 10 }} onPress={() => {
                        this.props.navigation.navigate("HomeNavigator");
                    }} status='success'>Login </Button>


                    <Button style={{ margin: 10 }} onPress={() => {
                        this.props.navigation.navigate("SignUp");
                    }} status='success'>Sign Up </Button>
                </View>

                <Text style={{ paddingTop: 10 }} category='h6'> Developed by Team Arcana </Text>

            </View>
        )
    }
}

export const Login = LoginComponent