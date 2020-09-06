import React from 'react';

import { CATEGORIES, Products } from '../data/dummy-data';
import ProductList from '../components/ProductList';

const ProductsScreen = props => {
  
  const {catId} = props.route.params;
  const selectedCategory = CATEGORIES.find((cat)=>cat.id===catId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [props.navigation]);


  const displayedProducts = Products.filter(
    product => product.categoryIds.indexOf(catId) >= 0
  );

  return <ProductList listData={displayedProducts} navigation={props.navigation} />;
};

export default ProductsScreen;
