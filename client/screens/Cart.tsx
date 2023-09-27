import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {FC, useMemo} from 'react';
import {COLORS} from '../constant';
import {ActionButton, CartCard} from '../components';
import {useProductContext} from '../context';
import { RouteStackParamList} from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Cart: FC<NativeStackScreenProps<RouteStackParamList, 'cart'>> = ({navigation}) => {

  //get all products stored in cart and the hanler to update it
  const {selectedProducts, setSelectedProducts} = useProductContext();

  //calcultae the total price of all selected products
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((a, b) => a + b.price * b.count, 0);
  }, [selectedProducts]);

  const totalItem = useMemo(() => {
    return selectedProducts.reduce((a, b) => a + b.count, 0);
  }, [selectedProducts]);

  //on successful checkout empty the selcted product array and go back to menu
  const onCheckout = () => {
    if (totalPrice > 0) {
      alert(
        'Checkout Successful, Your product will be delivered as soon as possible',
      );
      setSelectedProducts([]);
      navigation.navigate('menu');
    } else {
      alert('Please select a product');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* error message to display if no item has been selected */}
        {totalPrice < 1 && (
          <View style={styles.error}>
            <Text style={styles.errorText}>Unable to Checkout</Text>
            <Text style={styles.errorText2}>
              You haven't selected any product
            </Text>
            <Text style={styles.errorText2}>
              Products you select will appear here.
            </Text>
          </View>
        )}
        <View style={styles.cartOrders}>
          <FlatList
            data={selectedProducts}
            renderItem={({item}) => <CartCard product={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View style={styles.total}>
          <View style={styles.totalTextContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText2}>
              ({totalItem} items)
            </Text>
          </View>
          <Text style={styles.totalText}>&pound;{totalPrice}</Text>
        </View>
        <ActionButton
          onPress={onCheckout}
          variant="contained"
          title={`Checkout - \u00A3${totalPrice}`}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingBottom: 14,
  },
  back: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.background,
    marginBottom: 20,
  },
  cartOrders: {
    flex: 1,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalTextContainer: {
    flexDirection: 'row',
  },
  totalText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.black,
    fontSize: 14,
  },
  totalText2: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.grey,
    fontSize: 14,
    marginLeft: 4,
  },
  error: {
    alignItems: 'center',
    marginTop: 100,
  },
  errorText: {
    color: COLORS.primary,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 30,
  },
  errorText2: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 30,
  },
});

export default Cart;
