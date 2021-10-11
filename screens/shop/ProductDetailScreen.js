import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Button,
  Text
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetail = (props) => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(({ products }) =>
    products.availableProducts.find(({ id }) => id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetail.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({});

export default ProductDetail;
