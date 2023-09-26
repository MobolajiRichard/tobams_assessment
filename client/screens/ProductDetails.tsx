import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constant';
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import {ActionButton, AccordionItem, Back} from '../components';
import {FC, useState} from 'react';
import {useProductContext} from '../context';
import {productList} from '../constant';
import { ProductListProp, RouteStackParamList} from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const ProductDetails: FC<NativeStackScreenProps<RouteStackParamList, 'product'>> = ({navigation, route}) => {
  //target product id passed in the route
  const productId = route.params.id;

  //target product retrieved by id
  const [product, setProduct] = useState<ProductListProp>(
    productList.find(p => p.id.toString() === productId)!,
  );

  //get all products stored in cart and the hanler to update it
  const {setSelectedProducts} = useProductContext();

  //number of product
  const [productCount, setProductCount] = useState(1);

  // increase the amount of product to be added to cart
  const addProduct = () => {
    setProductCount(count => count + 1);
    setProduct(p => {
      return {
        ...p,
        count: productCount + 1,
      };
    });
  };

  // decrease the amount of product to be added to cart
  const subtractProduct = () => {
    if (productCount > 1) {
      setProductCount(count => count - 1);
      setProduct(p => {
        return {
          ...p,
          count: productCount - 1,
        };
      });
    }
  };

  //accordion list item
  const accordionItems = [
    'Ingredients',
    'Nutritional Information',
    'How to Prepare',
    'Dietary Information',
    'Storage Information',
    'Extra',
  ];

  //add product to cart
  const addToCart = () => {
    setSelectedProducts(products => {
      //check if product has previously been added to cart
      const productExists = products.find(p => p.id === product?.id);
      //if it has been previously selected update it with the new one
      //else just add it to the selected
      if (productExists) {
        let remainingProducts = products.filter(p => p.id !== product?.id);
        return [...remainingProducts, product];
      } else {
        return [...products, product];
      }
    });

    //display a successful message
    alert('Product added succesfully');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        style={styles.container}>
        {/* navigation */}
        <View style={{alignItems: 'flex-start', width: '100%'}}>
          <Pressable onPress={() => navigation.goBack()} style={styles.back}>
            <ChevronLeftIcon color={COLORS.black} size={20} />
          </Pressable>
        </View>

        {/* product image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={product?.image}
            resizeMode="cover"
          />
        </View>

        {/* dot */}
        <View style={styles.dotContainer}>
          <View style={[styles.dot, {backgroundColor: COLORS.primary}]}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>

        {/*product  details  */}
        <View style={styles.details}>
          <View style={styles.totalTextContainer}>
            <Text style={styles.totalText}>{product?.name}</Text>
            <Text style={styles.totalText2}>{product?.pka}</Text>
          </View>
          <Text style={[styles.name, {color: COLORS.primary}]}>
            &pound;{product?.price}
          </Text>
        </View>

        <View>
          <Text style={styles.desc}>
            Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
            made from yeast dough, shaped into balls and deep-fried until golden
            brown. It has a doughnut-like texture but slightly o....Read more
          </Text>
        </View>

        {/* Accordion */}
        <View style={styles.accordion}>
          {accordionItems.map((a, i) => (
            <AccordionItem key={i} title={a} />
          ))}
        </View>

        {/* product count  */}
        <View style={styles.countContainer}>
          <Pressable
            onPress={subtractProduct}
            style={[styles.back, {marginBottom: 0}]}>
            <MinusIcon
              color={productCount < 2 ? '#e1e5e9' : COLORS.black}
              size={15}
            />
          </Pressable>
          <Text style={styles.count}>{productCount}</Text>
          <Pressable
            onPress={addProduct}
            style={[styles.back, {marginBottom: 0}]}>
            <PlusIcon color={COLORS.black} size={15} />
          </Pressable>
        </View>

        <View style={styles.buttons}>
          <ActionButton
            onPress={addToCart}
            variant="contained"
            title="Add to Cart"
          />
          <ActionButton onPress={() => alert('subscribe')} variant="outlined" title="Subscribe to a Plan" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 20,
    width: Dimensions.get('window').width,
  },

  imageContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: 260,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#d9d9d9',
    marginHorizontal: 2,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
    width: '100%',
  },
  name: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: COLORS.black,
  },
  desc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#4A4A4A',
    textAlign: 'justify',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    width: '100%',
  },
  count: {
    color: '#131313',
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    fontSize: 14,
  },
  accordion: {
    width: '100%',
    marginTop: 40,
    marginBottom: 10,
    borderTopColor: '#e1e5e9',
    borderTopWidth: 1,
  },
  buttons: {
    width: '100%',
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
  totalTextContainer: {
    flexDirection: 'row',
  },
  back: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: '#e1e5e9',
    marginBottom: 5,
  },
});

export default ProductDetails;
