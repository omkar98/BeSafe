

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class LoginComponent extends React.Component {
    render = () => {
        return (
            <View>
                <Text> This will be login screen </Text>

                <TouchableHighlight onPress={() => {
                    this.props.navigation.navigate("HomeScreenNavigator");
                }}>
                    <Text>Login </Text>

                </TouchableHighlight>

                <TouchableHighlight onPress={() => {
                    this.props.navigation.navigate("SignUp");
                }}>
                    <Text>Sign up</Text>

                </TouchableHighlight>
            </View>
        )
    }
}

export const Login = LoginComponent