 import { Text } from "react-native"
    type Props= {
        name: string;
        age: number;
        on: boolean;
    }

 export const Welcome = (props:Props)=> {
    return(
        
        <Text> oi ,{props.name},TUDO BEM? Você tem {props.age} anos {props.on} </Text>
    )
}