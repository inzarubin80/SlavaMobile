import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import СategoriesScreen from '../sreens/СategoriesScreen'
import ProductsScreen from '../sreens/ProductsScreen'
import ProductScreen from '../sreens/ProductScreen'
import SettingsScreen from '../sreens/SettingsScreen'
import NewsScreen from '../sreens/NewsScreen'

//1
const Tab = createBottomTabNavigator();
const StackKatalog = createStackNavigator();

const Katalog = () => {
    return (
        <StackKatalog.Navigator>
            <StackKatalog.Screen name="СategoriesScreen" component={СategoriesScreen} 
            
            options={{
              title: 'Категории продукции',
             
              headerTitleStyle: {
                color: '#952833'
                
              },
            }}
            />
            <StackKatalog.Screen name="ProductsScreen" component={ProductsScreen}   options={{
             
              headerTitleStyle: {
                color: '#952833'
                
              },
            }} />
            <StackKatalog.Screen name="ProductScreen" component={ProductScreen} options={{
             
             headerTitleStyle: {
               color: '#952833'
               
             },
           }}
            
            />
        </StackKatalog.Navigator>
    );
};


const MyNavigation = (props) => {
    return (
      <NavigationContainer>
    <Tab.Navigator>
       <Tab.Screen name="Katalog" component={Katalog} />
        <Tab.Screen name="NewsScreen" component={NewsScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
     
    );
  }


export default MyNavigation;
