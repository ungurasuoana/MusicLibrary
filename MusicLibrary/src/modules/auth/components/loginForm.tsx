import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

interface Props {
    onPress: (email: string, pass: string) => void
}

export const LoginForm = (props:Props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    
    const onPress = () => {
        props.onPress(email, pass)
    }

    

    return(
        <View
        style={styles.container}>
            <TextInput
            style={styles.text}
            placeholder="Email"
            value={email}
            onChangeText={(value:string) => setEmail(value)}
            />
            <TextInput
            style={styles.text}
            placeholder="Password"
            value={pass}
            onChangeText={(value:string) => setPass(value)}
            secureTextEntry={false}
            />
            <Pressable
            style={styles.button}
            onPress={onPress}
            >
               <Text>Login</Text> 
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        width: '80%',
        borderBottomWidth: 2,
        height: 40,
    },
    button: {
        marginTop: 20,
        backgroundColor:'pink',
        borderRadius: 50,
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})