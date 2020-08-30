import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ProductItem from './ProductItem';

const ProductList = props => {
  const renderProductItem = itemData => {
    return (
      <ProductItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        destination={itemData.item.destination}
        //complexity={itemData.item.complexity}
        //affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default ProductList;
