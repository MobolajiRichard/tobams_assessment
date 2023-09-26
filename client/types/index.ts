import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType} from "react-native/types";

export type RouteStackParamList = {
    root: undefined,
    product: {id: string},
    menu: undefined,
    cart: undefined,
    home:undefined,
    tab:undefined,
    profile:undefined
}

export type ButtonProps = {
    variant:string,
    title:string,
    onPress: () => void | undefined
}

export type ProductListProp = {
        id:number,
        name:string,
        pka:string,
        price: number,
        image:ImageSourcePropType,
        desc:string,
        count:number
}

export type ProductListProp2 = {
    id:number | number,
    name:string | number,
    pka:string | number,
    price: number | number,
    image:ImageSourcePropType | number,
    desc:string | number,
    count:number
}
export type NavigationProp = {
    navigation : NativeStackScreenProps<RouteStackParamList>,
    }