import React from 'react';
import { Products } from '../data/dummy-data';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';


const FavoriteScreen = ({ navigation, favorites }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
     headerRight: () => (  
      <Button
      onPress = {()=>{alert('Открывается форма заказа образцов!!!')}}
      title="Заказать" 
      type="clear"
    />
     ),
   });
 }, [navigation]);

  const displayedProducts = Products.filter(
    product => favorites.includes(product.id)
  );

  console.log(' displayedProducts.length ' + displayedProducts.length);

  return (
   
      <ProductList listData={displayedProducts} navigation={navigation} />

  );
};

const mapStateToProps = state => {
  return {
    favorites: state.app.favorites
  }
}

export default connect(mapStateToProps)(FavoriteScreen);
