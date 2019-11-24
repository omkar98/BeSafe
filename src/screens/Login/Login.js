import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { Icon } from 'react-native-elements';


import {
    Button,
    Input,
    Text
} from 'react-native-ui-kitten';


class LoginComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
          <View style={{flex:1, backgroundColor: 'white'}}>
          <View style={{backgroundColor:'#13B7E1', textAlign: 'center'}}>
            <Text style={{textAlign: 'center', color:'white', padding: 10}}>Bhopal Smart City Hackathon 2.0</Text>
          </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
              <View style={{
                backgroundColor:'white',
                borderBottomRightRadius:100, borderBottomLeftRadius:100 ,
               borderTopRightRadius: 100,borderTopLeftRadius: 100,
               padding: 20,
               shadowColor: "#FFF",
                shadowOffset: {
                	width: 0,
                	height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                elevation: 24,
              }}>
                <Image style={{  marginBottom: 10, marginLeft:-10}} source={require('../../theme/icons/scb.png')} />
              </View>
                <View style={{ margin: 10, justifyContent: "center", alignItems: "center"}}>
                    <Text category='h1' style={{color:'black', letterSpacing: 5, margin: 10}}>BE-SAFE</Text>
                    <Text category='h6' style={{color: 'black', fontStyle: 'italic'}}>Let's make India Safe, <Text category='h6' style={{ color:'black', textDecorationLine:'underline'}}>Together!</Text> </Text>
                </View>
                <View style={{width:'100%', backgroundColor:'white', padding:0,
                borderBottomRightRadius:20, borderBottomLeftRadius:20 ,
               borderTopRightRadius: 20, marginLeft: 5, paddingTop: 30,
               paddingLeft:20, paddingRight:20,
               shadowColor: "#FFF",
                shadowOffset: {
                	width: 0,
                	height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 10.00,

                elevation: 4,
             }}>
                <Input
                    style={{ marginBottom: 10, marginLeft:0 }}
                    value={this.state.emailId}
                    size='small'
                    onChangeText={(emailId) => {
                        this.setState({ emailId })
                    }}
                    placeholder='Email Id'
                />
                <Input
                    style={{ marginBottom: 10, marginLeft:0 }}
                    value={this.state.password}
                    size='small'
                    onChangeText={(password) => {
                        this.setState({ password })
                    }}
                    placeholder='Password'
                />

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <Button style={{ margin: 10, backgroundColor:'#00AEEF', borderColor:'#00AEEF'}} onPress={() => {
                        this.props.navigation.navigate("HomeNavigator");
                    }} status='success' ><Text style={{color: 'white'}}>Login</Text> </Button>

                    <Button style={{  margin: 10, backgroundColor:'#00AEEF', borderColor:'#00AEEF' }} onPress={() => {
                        this.props.navigation.navigate("SignUp");
                    }} status='success'><Text style={{color: 'white'}}>Sign Up</Text> </Button>
                </View>

                </View>
                  <Text category='c1' style={{color:'black', paddingTop:10}}>Safe Bhopal, Smart Bhopal</Text>
            </View>
            <Text style={{ padding: 10, color:'black', textAlign:'right'  }} category='label'> Developed by Team Arcana </Text>
          </View>
        )
    }
}

export const Login = LoginComponent
