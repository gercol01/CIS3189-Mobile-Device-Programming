import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import AddPlantsScreen from './screens/AddPlantsScreen';
import AllPlantsScreen from './screens/AllPlantsScreen';
import SettingsScreen from './screens/SettingsScreen';
import FAQScreen from './screens/FAQScreen';

//screen names
const homeName = 'Home';
const addplantsName = 'Add Plants';
const settingsName = 'Settings';
const allplantsName = 'All Plants'
const faqName = 'FAQ';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer 
        
        >
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === addplantsName){
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === settingsName){
                            iconName = focused ? 'settings' : 'settings-outline'
                        } else if (rn === allplantsName){
                            iconName = focused ? 'leaf' : 'leaf-outline'
                        }

                        return <Icon name={iconName} size={30}/>

                    },
                    tabBarStyle: { height: 60, paddingTop: 5 },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 5, fontSize: 10},
                    
                }}
                
                >

                {/* the icons and names at the bottom & top */}
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={addplantsName} component={AddPlantsScreen}/>
                <Tab.Screen name={allplantsName} component={AllPlantsScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>

            </Tab.Navigator>

        </NavigationContainer>
    );
}