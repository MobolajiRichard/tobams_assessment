import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  );
};

export default Profile;

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
