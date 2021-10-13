import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../../store/actions/cart';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
  const products = useSelector(({ products }) => products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: item.id,
              productTitle: item.title
            });
          }}
          onAddToCart={() => dispatch(cartActions.addToCart(item))}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All products'
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
