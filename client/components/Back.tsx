import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { COLORS } from '../constant'
import { useNavigation } from '@react-navigation/native'

const Back = () => {
    const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.back}>
    <ChevronLeftIcon color={COLORS.black} size={20} />
  </Pressable>
  )
}

export default Back

const styles = StyleSheet.create({
    back: {
        width: 36,
        height: 36,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e1e5e9',
        marginLeft:24,
        marginBottom:5
      },
})