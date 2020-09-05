import React from 'react';

import {
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native';

import { Button, Icon } from 'react-native-elements';
import { Products } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const ProductScreen = props => {

  const { prodId } = props.route.params;
  const selectedProduct = Products.find((prod) => prod.id === prodId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedProduct.title,

      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          type="clear"
  //        icon={<Icon name='star-outline'  type='ionicon' color='#ffd700' />}

          icon={<Icon
  name='star-border'
  //color='#00aced' 
  
  />}



          
        />
      ),

    });
  }, [props.navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },

});

export default ProductScreen;
