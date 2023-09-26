import { View, Text, Image, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Cart, Menu, Profile} from "../screens";
import { RouteStackParamList } from "../types";
import { COLORS } from "../constant";
import { ChevronLeftIcon, HomeIcon, ShoppingBagIcon, Squares2X2Icon } from "react-native-heroicons/outline";
import { HomeIcon as HomeActive, ShoppingBagIcon as ShoppingBagActive, Squares2X2Icon as SquaresActive} from "react-native-heroicons/solid";
import { IMAGES } from "../assets/images";
import { Back } from "../components";

const Tab = createBottomTabNavigator<RouteStackParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle: {backgroundColor: COLORS.background, borderTopLeftRadius:8, borderTopRightRadius:8, marginBottom:10, paddingHorizontal:20}}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : '#858585',
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused ? <HomeActive color={COLORS.primary} /> :
            <HomeIcon
              size={24}
              color={focused ? COLORS.primary : '#858585'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : '#858585',
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              Menu
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused? <SquaresActive color={COLORS.primary}/> :
            <Squares2X2Icon
              size={24}
              color={'#858585'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          headerShown:true,
          headerStyle:{backgroundColor:COLORS.background},
          headerTitleStyle:{ fontFamily:'Poppins-Medium', fontSize:14, color:COLORS.black},
          headerTitle:'Cart',
          headerTitleContainerStyle:{paddingBottom:5},
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : '#858585',
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              Cart
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused? <ShoppingBagActive color={COLORS.primary}/> :
            <ShoppingBagIcon
              size={24}
              color={focused ? "tomato" : '#858585'}
            />
          ),
          headerLeft: () => <Back/>,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : '#858585',
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              Account
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.hero}/>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTab;