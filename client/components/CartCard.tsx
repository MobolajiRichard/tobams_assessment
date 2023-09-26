import { StyleSheet, Text, View , Image, Pressable, Dimensions} from 'react-native'
import React, { FC, useState } from 'react'
import { IMAGES } from '../assets/images'
import { MinusIcon, PlusIcon, TrashIcon } from 'react-native-heroicons/outline'
import { COLORS } from '../constant'
import { useProductContext } from '../context'
import { ProductListProp } from '../types'

type CardProp = {
  product:ProductListProp
}

const CartCard:FC<CardProp> = ({product}) => {

  //handler to update the products added to cart
  const {setSelectedProducts} = useProductContext()

  //product count
  const [productCount, setProductCount] = useState<number>(product.count)

  //on addition press, add the count for the product by 1
  const addProduct = () => {
    setProductCount(count => count + 1)
    setSelectedProducts((products) => {
      const otherProduct = products.filter((p) => p.id !== product?.id)
      const targetProduct = {...product, count:productCount + 1}
        return [
          targetProduct, ...otherProduct,
        ]
    })
  }

  //on subtract press, deduct the count for the product by 1
  const subtractProduct = () => {
    if(productCount > 1){
      setProductCount(count => count - 1)
      setSelectedProducts((products) => {
        const otherProduct = products.filter((p) => p.id !== product?.id)
        const targetProduct = {...product, count:productCount - 1}
          return [
            ...otherProduct, targetProduct
          ]
      })
    }
  }

  //on delete remove the products from the context store
  const onProductDelete = () => {
    setSelectedProducts((products) => {
      const otherProduct = products.filter((p) => p.id !== product?.id)
        return [
          ...otherProduct
        ]
    })

  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={product?.image}/>
      </View>
      <View style={styles.details}>
        <View style={styles.totalTextContainer}>
        <Text style={styles.totalText}>{product?.name}</Text>
        <Text style={styles.totalText2}>{product?.pka}</Text>
        </View>
        
        <Text style={styles.price}>&pound;{product?.price * product?.count}</Text>
        <Pressable onPress={onProductDelete}>
        <TrashIcon color={COLORS.black}/>

        </Pressable>
      </View>
       {/* product count  */}
       <View style={styles.countContainer}>
          <Pressable onPress={subtractProduct} style={[styles.back, {marginBottom: 0}]}>
            <MinusIcon color={COLORS.black} size={15} />
          </Pressable>
          <Text style={styles.count}>{product?.count}</Text>
          <Pressable onPress={addProduct} style={[styles.back, {marginBottom: 0}]}>
            <PlusIcon color={COLORS.black} size={15} />
          </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // height:120,
        marginTop:40

    },
    image:{

    },
    details:{
        flex:1,
        justifyContent:'space-between',
        paddingVertical:5,
        marginLeft:15,
    },
    buttons:{
        
    },
    countContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    count: {
      color: '#131313',
      fontFamily: 'Poppins-Medium',
      fontWeight: '600',
      fontSize: 14,
    },
    back: {
      width: 32,
      height: 32,
      backgroundColor: COLORS.white,
      borderRadius: 8,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: COLORS.background,
      marginBottom: 20,
    },
    price:{
      color:COLORS.primary,
      fontSize:14,
      fontFamily:'Poppins-Medium'
  },
  totalText:{
    fontFamily:'Poppins-Medium',
    color:COLORS.black,
    fontSize:14
},
totalText2:{
    fontFamily:'Poppins-Regular',
    color:COLORS.grey,
    fontSize:14,
    marginLeft:4
},
totalTextContainer:{
  flexDirection:'row'
},
})

export default CartCard
