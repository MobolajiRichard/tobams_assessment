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
import {IMAGES} from '../assets/images';
import {ActionButton, AccordionItem} from '../components';
import { useState } from 'react';

const ProductDetails = ({navigation}) => {

  const [productCount, setProductCount] = useState(1)

  const addProduct = () => {
    setProductCount(count => count + 1)
  }
  const subtractProduct = () => {
    if(productCount > 1){
      setProductCount(count => count - 1)
    }
  }

  const accordionItems = [
    'Ingredients',
    'Nutritional Information',
    'How to Prepare',
    'Dietary Information',
    'Storage Information',
    'Extra',
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        style={styles.container}>
        {/* navigation */}
        <View style={{alignItems:'flex-start', width:'100%'}}>
        <Pressable onPress={() => navigation.goBack()} style={styles.back}>
          <ChevronLeftIcon color={COLORS.black} size={20} />
        </Pressable>
        </View>
     

        {/* product image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={IMAGES.asaro}
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
          <Text style={styles.name}>African Doughnut Mix (Puff Puff)</Text>
          <Text style={[styles.name, {color: COLORS.primary}]}>
            &pound;3.99
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
          <Pressable onPress={subtractProduct} style={[styles.back, {marginBottom: 0}]}>
            <MinusIcon color={ productCount < 2 ? '#e1e5e9' : COLORS.black} size={15} />
          </Pressable>
          <Text style={styles.count}>{productCount}</Text>
          <Pressable onPress={addProduct} style={[styles.back, {marginBottom: 0}]}>
            <PlusIcon color={COLORS.black} size={15} />
          </Pressable>
        </View>

        <View style={styles.buttons}>
          <ActionButton variant="contained" title="Add to Cart" />
          <ActionButton variant="outlined" title="Subscribe to a Plan" />
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
    marginTop:40,
    marginBottom:10,
    borderTopColor:'#e1e5e9',
    borderTopWidth:1
  },
  buttons: {
    width: '100%',
  },
});

export default ProductDetails;
