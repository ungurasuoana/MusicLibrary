import { View, Text, StyleSheet, Pressable, ListRenderItemInfo } from "react-native"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { Avatar } from "../components/avatar"
import { FlatList } from "react-native-gesture-handler"
import { GenrePrefItem } from "../components/genrePrefItem"
import { useEffect } from "react"

export const SettingsScreen = () => {
    const genres = ['Metal', 'Rock', 'Indie', 'Hip Hop', 'Electronics', 'Folk', 'Latin', 'Pop', 'Country','Soul']

    const { setUser, user } = useAuthStore((state: UserState) => ({ 
        setUser: state.setUser, 
        user: state.user,
    }))


    const onPress = () => { setUser(null) }

    // useEffect(() => {
    //     const favGenre = user?.favGenre.join(', ')
    // }, [user?.favGenre])

    const renderItem = ({ item }: ListRenderItemInfo<string>) =>
        <GenrePrefItem data={item}/>
    return (
        <View
            style={styles.container}>
            <Avatar user={user} />
            <View style={styles.textBox}>
            <Text style={styles.text}>{user?.email}</Text>
            <Text>{user?.username}</Text>
            <Text>{user?.favGenre.join(', ')}</Text>
            <FlatList
            data={genres}
            renderItem={renderItem}
            horizontal={true}
            />
            
            </View>
            <Pressable
                style={styles.button}
                onPress={onPress}>
                <Text style={{color: 'black'}}>Logout</Text>
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