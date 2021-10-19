import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector(({ cart }) => cart.totalAmount);
  const cartItems = useSelector(({ cart }) => {
    const transformedItems = [];
    for (const key in cart.items) {
      transformedItems.push({
        productId: key,
        productTitle: cart.items[key].productTitle,
        productPrice: cart.items[key].productPrice,
        quantity: cart.items[key].quantity,
        sum: cart.items[key].sum
      });
    }
    return transformedItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        key={({ productId }) => productId}
        renderItem={({ item }) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            onRemove={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default CartScreen;
