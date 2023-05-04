import { View, Text, StyleSheet, Pressable } from "react-native"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { Avatar } from "../components/avatar"

export const SettingsScreen = () => {
    const { setUser, user } = useAuthStore((state: UserState) => ({ setUser: state.setUser, user: state.user }))

    const onPress = () => { setUser(null) }
    return (
        <View
            style={styles.container}>
            <Avatar user={user} />
            <View style={styles.textBox}>
            <Text style={styles.text}>{user?.email}</Text>
            <Text>{user?.username}</Text>
            <Text>{user?.favGenre}</Text>
            </View>
            <Pressable
                style={styles.button}
                onPress={onPress}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox:{
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 20
    },
    text: {
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    button: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})