import {Dimensions, Text, View, StyleSheet} from 'react-native';
import {ActionButton} from '../components';
import {COLORS} from '../constant';
import { NavigationProp } from '../types';
import { FC } from 'react';

const Home:FC<NavigationProp> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Welcome,</Text>
        <ActionButton
          onPress={() => navigation.navigate('menu')}
          variant="outlined"
          title="See Available Products"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  wrapper: {
    width: '70%',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Home;
