import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FC} from 'react';
import {ButtonProps} from '../types';
import {COLORS} from '../constant';

const Button : FC<ButtonProps> = ({variant, title}) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            variant === 'contained' ? COLORS.primary : COLORS.background,
        },
      ]}>
      <Text
        style={[styles.text, {
          color: variant === 'contained' ? COLORS.white : COLORS.primary,
        }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems:'center',
    justifyContent:"center",
    marginBottom:20
  },
  text:{
    fontSize:14,
    fontFamily:'Poppins-Medium'
  }
});

export default Button;
