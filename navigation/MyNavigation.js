import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import СategoriesScreen from '../sreens/СategoriesScreen'
import ProductsScreen from '../sreens/ProductsScreen'
import ProductScreen from '../sreens/ProductScreen'
import SettingsScreen from '../sreens/SettingsScreen'
import FavoriteScreen from '../sreens/FavoriteScreen'

import {  Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const StackKatalog = createStackNavigator();
const Drawer = createDrawerNavigator();
const StackOrder = createStackNavigator();



const Order = () => {
  return (
    <StackOrder.Navigator>
      <StackOrder.Screen name="FavoriteScreen" component={FavoriteScreen}
        options={{
          title: 'Избраное',

          headerTitleStyle: {
            color: '#952833'

          },
        }}
      />

      <StackKatalog.Screen name="ProductScreen" component={ProductScreen} options={{
        headerTitleStyle: {
          color: '#952833'

        },
      }}
      />
    </StackOrder.Navigator>
  );
};



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
      <StackKatalog.Screen name="ProductsScreen" component={ProductsScreen} options={{

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


const tabNavigation = (props) => {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Katalog') {
          iconName = 'library-books';
        } else if (route.name === 'Order') {
          iconName = 'add-shopping-cart';
        }

        return   <Icon name= {iconName} color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    
    >
      <Tab.Screen name="Katalog" component={Katalog} />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
}

const MyNavigation = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={tabNavigation} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;
