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
import { connect } from 'react-redux'

import {addFavorite, removeFavorite} from '../redux/actions';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const ProductScreen = ({favorites, route, navigation, addFavorite, removeFavorite}) => {

  const { prodId } = route.params;
  const selectedProduct = Products.find((prod) => prod.id === prodId);

  //favorites.find((prodId) => prodId === prodId);

  const isFavorite = favorites.includes(prodId);
  console.log('isFavorite ' + isFavorite);
  console.log('length ' + favorites.length);

  React.useLayoutEffect(() => {
     navigation.setOptions({
      title: selectedProduct.title,

      headerRight: () => (
        <Button
          onPress={()=>{isFavorite ? removeFavorite(prodId):addFavorite(prodId)}}
          type="clear"
          icon={<Icon name= {isFavorite ? 'star' : 'star-border'} color={isFavorite ? '#ffd700' : ''} />}
        />
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.app.favorites
  }
}

const mapDispatchToProps = {
  addFavorite, removeFavorite
}



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

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);