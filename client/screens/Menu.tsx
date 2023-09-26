import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constant';
import {
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {ProductCard} from '../components';
import {productList} from '../constant';

const Menu = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text>Menu</Text>
        </View>
        <View style={styles.products}>
          <View style={styles.searchBox}>
            <MagnifyingGlassIcon size={16} color={COLORS.grey} />
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              placeholderTextColor={'#858585'}
            />
          </View>
        </View>
        <FlatList
          data={productList}
          renderItem={({item}) => <ProductCard productInfo={item} />}
          contentContainerStyle={{
            paddingBottom: 10,
            paddingHorizontal: 20,
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  menu: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E5E9',
    paddingVertical: 20,
    width: Dimensions.get('window').width,
  },
  searchBox: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    borderColor: '#E1E5E9',
    // marginBottom:15
  },
  products: {
    padding: 20,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
  },
});

export default Menu;
