import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constant';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {IMAGES} from '../assets/images';

const ProductDetails = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Pressable style={styles.back}>
          <ChevronLeftIcon color={COLORS.black} size={20} />
        </Pressable>
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
      </View>
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
});

export default ProductDetails;
