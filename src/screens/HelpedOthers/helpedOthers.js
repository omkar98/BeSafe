import React from 'react';
import { View, TouchableHighlight, Image, TouchableNativeFeedback, StyleSheet } from 'react-native';

import {
    Button,
    Input,
    Text,
    Icon
} from 'react-native-ui-kitten';


class HelpedOthersComponent extends React.Component {
    state = {
        emailId: '',
        password: ''
    }
    render = () => {
        return (
          <View>
            <View style={styles.header}>
              <Image style={{ height: 35, width: 25, marginTop:2}} source={require('../../theme/icons/emergency_header.jpg')} />
              <Text category='h4' style={{color:'white', marginTop:5}}>  Emergency Requests</Text>
            </View>

            <View style={styles.applyShadow}>
              <View style={styles.eachRequest}>
                <Image style={{  width:50, height: 50}} source={require('../../theme/icons/user.png')} />
                <View style={styles.middleContent}>
                  <Text style={{fontWeight:'bold'}}>Omkar Deshpande</Text>
                  <Text style={{fontStyle:'italic'}}>"Chain Snatching Case"</Text>
                </View>
                <View style={styles.sideContent}>
                  <View style={styles.sideDistanceContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/maps.png')} />
                    <Text>122m away</Text>
                  </View>
                  <View style={styles.sideTimeContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/time.png')} />
                    <Text style={{fontStyle:'italic'}}>12 mins ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/resolved.jpg')} />
                  <Text>Resolved by Shivani Vaidya</Text>
                </View>
              </View>
            </View>
            <View style={styles.applyShadow}>
              <View style={styles.eachRequest}>
                <Image style={{  width:50, height: 50}} source={require('../../theme/icons/user.png')} />
                <View style={styles.middleContent}>
                  <Text style={{fontWeight:'bold'}}>Sangamesh Somawar</Text>
                  <Text style={{fontStyle:'italic'}}>"Public Fight"</Text>
                </View>
                <View style={styles.sideContent}>
                  <View style={styles.sideDistanceContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/maps.png')} />
                    <Text> 20m away</Text>
                  </View>
                  <View style={styles.sideTimeContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/time.png')} />
                    <Text style={{fontStyle:'italic'}}> 3 hrs ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/resolved.jpg')} />
                  <Text>Resolved by Police</Text>
                </View>
              </View>
            </View>
            <View style={styles.applyShadow}>
              <View style={styles.eachRequest}>
                <Image style={{  width:50, height: 50}} source={require('../../theme/icons/user.png')} />
                <View style={styles.middleContent}>
                  <Text style={{fontWeight:'bold'}}>Pratiksha Walbe</Text>
                  <Text style={{fontStyle:'italic'}}>"High BP"</Text>
                </View>
                <View style={styles.sideContent}>
                  <View style={styles.sideDistanceContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/maps.png')} />
                    <Text> 5m away</Text>
                  </View>
                  <View style={styles.sideTimeContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/time.png')} />
                    <Text style={{fontStyle:'italic'}}> 1 day ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/resolved.jpg')} />
                  <Text>Resolved by You</Text>
                </View>
              </View>
            </View>
          
            <View style={styles.applyShadow}>
              <View style={styles.eachRequest}>
                <Image style={{  width:50, height: 50}} source={require('../../theme/icons/user.png')} />
                <View style={styles.middleContent}>
                  <Text style={{fontWeight:'bold'}}>Jayesh Ukalkar</Text>
                  <Text style={{fontStyle:'italic'}}>"Regular Street Fights"</Text>
                </View>
                <View style={styles.sideContent}>
                  <View style={styles.sideDistanceContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/maps.png')} />
                    <Text> 3 km away</Text>
                  </View>
                  <View style={styles.sideTimeContent}>
                    <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/time.png')} />
                    <Text style={{fontStyle:'italic'}}> 7 days ago</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomContent}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{ height: 20, width: 20, marginTop:0}} source={require('../../theme/icons/notResolved.jpg')} />
                  <Text>Not-Resolved</Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  applyShadow:{
    backgroundColor:'white',
    shadowColor: "#FFF",
    shadowOpacity: 0.8,
    shadowRadius: 1.00,
    elevation: 5,
    marginHorizontal:0,
    marginTop:2
  },
  requestBox:{
    marginHorizontal: 20,
    marginVertical: 20
  },

  middleContent:{
    paddingLeft: 10,
    width:'50%',
    height:30
  },
  sideContent:{
    // justifyContent:'right'
  },
  sideDistanceContent:{
    paddingLeft: 30,
    flexDirection:'row',
    justifyContent:'center'
  },
  sideTimeContent:{
    paddingLeft: 30,
    flexDirection:'row',
    paddingTop:10
  },
  eachRequest:{
    backgroundColor:'white',
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0 ,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    padding: 10,
    flexDirection:'row'
  },
  header: {
    backgroundColor: '#A0599B',
    padding: 10,
    paddingLeft: 30,
    shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 12,
     },
     shadowOpacity: 0.58,
     shadowRadius: 16.00,
     elevation: 15,
     flexDirection:'row',
  },
});

export const HelpedOthers = HelpedOthersComponent
