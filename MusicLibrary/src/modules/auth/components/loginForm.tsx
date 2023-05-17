import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Logo } from "../../../assets/icons"

interface Props {
    onPress: (email: string, pass: string) => void
}

export const LoginForm = (props: Props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const onPress = () => {
        props.onPress(email, pass)
    }



    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Logo width={35} height={35} />
                <Text style={styles.headerText}>PlayMusic</Text>
            </View>
            <Text style={styles.headerText}>Login</Text>
            <View style={styles.middleBox}>
            <TextInput
                style={styles.text}
                placeholder="Email"
                value={email}
                onChangeText={(value: string) => setEmail(value)}
                placeholderTextColor='white'
                autoCapitalize="none"
            />
            <TextInput
                style={styles.text}
                placeholder="Password"
                value={pass}
                onChangeText={(value: string) => setPass(value)}
                secureTextEntry={false}
                placeholderTextColor='white'
                autoCapitalize="none"
            />
            </View>
            <Pressable
                style={styles.button}
                onPress={onPress}
            >
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    text: {
        color: 'white',
        paddingLeft: 5,
        height: 30,
        borderColor: 'pink',
        borderBottomWidth: 2,
        width: '80%',
        fontSize: 16,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: "pink",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5,
        elevation: 8,
        backgroundColor: 'black',

    },
    button: {
        marginTop: 50,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'pink',
        borderBottomWidth: 2,
        fontSize: 16,
        borderRadius: 30,
        shadowColor: "pink",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5,
        elevation: 8,
        backgroundColor: 'black',
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 0.3,
        justifyContent: 'flex-end',
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        left: 5,
        fontWeight: 'bold'
    },
    middleBox: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        flex: 0.3
    }
})