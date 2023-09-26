import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../constant'
import { IMAGES } from '../assets/images'
import {HeartIcon, ShoppingBagIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { ProductListProp, RouteStackParamList } from '../types'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


type CardProp = {
  productInfo:ProductListProp
}

const ProductCard: FC<CardProp> = ({productInfo}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteStackParamList>>()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <View style={styles.favorite}>
        <HeartIcon color={COLORS.grey}/>
      </View>
      <Image source={productInfo?.image} resizeMode='cover'/>
      <View style={styles.details}>
        <View style={styles.name}>
        <Text style={styles.title}>{productInfo.name.length > 12 ? productInfo.name.substring(0, 12) + '...' : productInfo.name}</Text>
        { productInfo.name.length <13 && <Text style={[styles.title, {color:'#4a4a4a', fontFamily:'Poppins-Regular', marginLeft:2}]}>{productInfo?.pka.length + productInfo.name.length > 12 ? productInfo.pka.substring(0, 12 - productInfo.name.length) + '...' : productInfo.pka}</Text>}
        </View>
        <Text style={styles.price}>&pound;{productInfo?.price}</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('product', {id:productInfo.id.toString()})} style={styles.button}>
        <ShoppingBagIcon color={COLORS.white}/>
        <Text style={styles.addToCart}>Add to Cart</Text>
      </Pressable> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:20,
        flex:1
    },
    innerContainer:{
      height:228,
      borderRadius:8,
      backgroundColor:COLORS.white,
      alignItems:'center',
      paddingHorizontal:'2%',
      paddingVertical:10,
      flex:1
    },
    favorite:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:5,
        width:'100%'
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
        width:'100%'
    },
    imageContainer:{
        height:94.3
    },
    title:{
        color:COLORS.black,
        fontSize:14,
        fontFamily:'Poppins-Medium'
    },
    price:{
        color:COLORS.primary,
        fontSize:14,
        fontFamily:'Poppins-Medium'
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:'12.6%',
        backgroundColor:COLORS.primary,
        height:40,
        borderRadius:50,
        width:'100%'
    },
    addToCart:{
        color:COLORS.white,
        fontSize:12,
        fontFamily:'Poppins-Regular'
    },
    name:{
      flexDirection:'row',
      alignItems:'center',
    }
})

export default ProductCard
