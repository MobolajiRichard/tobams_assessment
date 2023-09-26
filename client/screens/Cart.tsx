import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import { ActionButton, CartCard } from '../components'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>

    <View style={styles.cartOrders}>
        <FlatList
        data={[1,2,3,4,5,6,7,8]}
        renderItem={() => <CartCard/>}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        />
    </View>

      <View style={styles.total}>
        <View style={styles.totalTextContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText2}>(3 items)</Text>
        </View>
        <Text style={styles.totalText}>&pound;90</Text>
      </View>
      <ActionButton variant='contained' title='Checkout - &pound;90'/>
        </View>      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.background,
        paddingHorizontal:24,
        paddingBottom:14
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
      cartOrders:{
        flex:1
      },
    total:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    },
    totalTextContainer:{
        flexDirection:'row'
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
    totalPrice:{

    }
})

export default Cart
