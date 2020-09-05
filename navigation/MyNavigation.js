import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import СategoriesScreen from '../sreens/СategoriesScreen'
import ProductsScreen from '../sreens/ProductsScreen'
import ProductScreen from '../sreens/ProductScreen'
import SettingsScreen from '../sreens/SettingsScreen'
import NewsScreen from '../sreens/NewsScreen'



const Tab = createBottomTabNavigator();
const StackKatalog = createStackNavigator();
const Drawer = createDrawerNavigator();


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
    <Tab.Navigator>
      <Tab.Screen name="Katalog" component={Katalog} />
      <Tab.Screen name="NewsScreen" component={NewsScreen} />
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
