import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { useState } from "react"
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from "@react-navigation/native";

export const EditUser = () => {
    const navigation = useNavigation()

    const { updateUser, user } = useAuthStore((state: UserState) => ({ 
        updateUser: state.updateUser, 
        user: state.user
    }))

    const[email, setEmail] = useState(user?.email  || '')
    const [username, setUsername] = useState(user?.username || '')

    const onChangeEmail = (email: string) => {setEmail(email)}
    const onChangeUser = (user: string) => {setUsername(user)}

    const onSaveChanges = () => {
        if(!user) return
        const updated = {...user, email: email, username: username}
        updateUser(updated)
        navigation.goBack()
    }

    const onPress = async() => {
        if(!user) return
        const image = await ImagePicker.openPicker({
            cropping: true,
            width: 150,
            height: 150,
            includeBase64: true,
            mediaType: 'photo'
        })
        console.log(image)
        const updatedImage = {...user, profilePicture:`data:${image.mime};base64,${image.data}`}
        updateUser(updatedImage)
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Edit User Info</Text>
            <Pressable style={styles.avatar} onPress={onPress}>
                <Text>Change Picture</Text>
            </Pressable>
            <TextInput
            style={styles.textInput}
            placeholder={user?.email}
            value={email}
            onChangeText={onChangeEmail}/>
            <TextInput
            style={styles.textInput}
            placeholder={user?.username}
            value={username}
            onChangeText={onChangeUser}/>
            <Pressable style={styles.button}
            onPress={onSaveChanges}>
                <Text>Save Changes</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
    },
    avatar: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 75,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 2,
        width: '80%',
        fontSize: 16,
        marginTop: 20
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    }
})