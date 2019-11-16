import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Login } from '../screens/Login/Login';
import { SignUp } from '../screens/SignUp/SignUp';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { Profile } from '../screens/Profile/Profile';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


const loginNavigator = createStackNavigator({
    Login,
    SignUp
})

const homeScreenNavigator = createBottomTabNavigator({
    HomeScreen,
    Profile
});

const rootNavigator = createAnimatedSwitchNavigator(
    {
        // LoginNavigator: loginNavigator,
        HomeScreenNavigator: homeScreenNavigator
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