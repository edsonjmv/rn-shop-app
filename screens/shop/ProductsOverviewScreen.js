import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const products = useSelector(({ products }) => products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All products'
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
