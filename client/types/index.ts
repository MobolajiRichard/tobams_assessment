import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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
    onPress: () => void
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
export type NavigationProp = {
    navigation : NativeStackNavigationProp<RouteStackParamList>,
    }