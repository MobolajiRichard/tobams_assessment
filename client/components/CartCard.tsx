import { StyleSheet, Text, View , Image, Pressable, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../assets/images'
import { MinusIcon, PlusIcon, TrashIcon } from 'react-native-heroicons/outline'
import { COLORS } from '../constant'

const CartCard = () => {
  const [productCount, setProductCount] = useState(1)
  const addProduct = () => {
    setProductCount(count => count + 1)
  }
  const subtractProduct = () => {
    if(productCount > 1){
      setProductCount(count => count - 1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={IMAGES.chicken}/>
      </View>
      <View style={styles.details}>
        <View style={styles.totalTextContainer}>
        <Text style={styles.totalText}>Asaro</Text>
        <Text style={styles.totalText2}>(Yam Porridge)</Text>
        </View>
        
        <Text style={styles.price}>&pound;90</Text>
        <TrashIcon color={COLORS.black}/>
      </View>
       {/* product count  */}
       <View style={styles.countContainer}>
          <Pressable onPress={subtractProduct} style={[styles.back, {marginBottom: 0}]}>
            <MinusIcon color={COLORS.black} size={15} />
          </Pressable>
          <Text style={styles.count}>{productCount}</Text>
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
