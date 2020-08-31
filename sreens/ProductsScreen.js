import React from 'react';

import { CATEGORIES, Products } from '../data/dummy-data';
import ProductList from '../components/ProductList';

const ProductsScreen = props => {
  
  const {catId} = props.route.params;

  const selectedCategory = CATEGORIES.find((cat)=>cat.id===catId);

  props.navigation.setOptions({ headerTitle: selectedCategory.title })

  //console.log(catId);

  //const catId = props.navigation.getParam('categoryId');

  const displayedProducts = Products.filter(
    product => product.categoryIds.indexOf(catId) >= 0
  );

  return <ProductList listData={displayedProducts} navigation={props.navigation} />;
};

/*CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};*/

export default ProductsScreen;
