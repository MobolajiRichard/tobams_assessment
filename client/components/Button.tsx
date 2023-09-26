import {View, Text, StyleSheet} from 'react-native';
import {FC} from 'react';
import {ButtonProps} from '../types';
import {COLORS} from '../constant';

const Button : FC<ButtonProps> = ({variant, title}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroungColor:
            variant === 'contained' ? COLORS.primary : COLORS.background,
        },
      ]}>
      <Text
        style={{
          color: variant === 'contained' ? COLORS.white : COLORS.primary,
        }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});

export default Button;
