import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Login } from '../screens/Login/Login';
import { SignUp } from '../screens/SignUp/SignUp';
import { Home } from '../screens/Home/Home';
import { Profile } from '../screens/Profile/Profile';
import { HelpedOthers as Help } from '../screens/HelpedOthers/helpedOthers';

import { Icon} from 'react-native-ui-kitten';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


const loginNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    }
})

const HomeNavigator = createBottomTabNavigator({
    Home,
    Help,
    Profile
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: (props) => {
                return <TabBarIconComponent {...props} navigation={navigation} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: "#203354",
            inactiveTintColor: "grey",
        }
    });

const TabBarIconComponent = (props) => {
    const routeName = props.navigation.state && props.navigation.state.routeName;
    switch (routeName) {
        case 'Home':
                // return <Icon name="heart"/>
            return <Image style={{ height:25, width:25, tintColor: props.tintColor }} source={require('../theme/icons/maps.png')} />;
        case "Profile":
                // return <Icon name="heart"/>
        return <Image style={{ height:25, width:25,  tintColor: props.tintColor }} source={require('../theme/icons/profile.png')} />;
        case "Help":
                // return <Icon name="heart"/>
        return <Image style={{ height:25, width:25,  tintColor: props.tintColor }} source={require('../theme/icons/emergency.jpg')} />;


            // return <Image style={{ tintColor: props.tintColor }} source={require('../theme/icons/tabbar/access.png')} />;
    }
}

const rootNavigator = createAnimatedSwitchNavigator(
    {
        // LoginNavigator: loginNavigator,
        HomeNavigator: HomeNavigator
    },
    {
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="fade"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
);


export const RootComponent = createAppContainer(rootNavigator);
