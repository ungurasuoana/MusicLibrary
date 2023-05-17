import { View, Text, StyleSheet, Pressable, ListRenderItemInfo, Image, ImageBackground } from "react-native"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { Avatar } from "../components/avatar"
import { FlatList } from "react-native-gesture-handler"
import { GenrePrefItem } from "../components/genrePrefItem"

export const SettingsScreen = () => {
    const genres = ['Metal', 'Rock', 'Indie', 'Hip Hop', 'Electronics', 'Folk', 'Latin', 'Pop', 'Country', 'Soul']

    const { setUser, user } = useAuthStore((state: UserState) => ({
        setUser: state.setUser,
        user: state.user,
    }))


    const onPress = () => { setUser(null) }

    const renderItem = ({ item }: ListRenderItemInfo<string>) =>
        <GenrePrefItem data={item} />
    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../../assets/images/palm1.jpg')}>
                <View style={styles.container}>
                    <Avatar user={user} />
                    <View style={styles.textBox}>
                        <View style={styles.detailsBox}>
                        <Text style={styles.text}>Email: {user?.email}</Text>
                        <Text style={styles.text}>Username: {user?.username}</Text>
                        <Text style={styles.text}>Favorite genres: {user?.favGenre.join(', ')}</Text>
                        </View>
                        <Text style={styles.setGenreText}>
                            Choose your favorite genres:
                        </Text>
                        <View style={styles.flatList}>
                        <FlatList
                            data={genres}
                            renderItem={renderItem}
                            horizontal={true}
                        />
                        </View>
                    </View>
                    <View style={styles.footer}>
                    <Pressable
                        style={styles.button}
                        onPress={onPress}>
                        <Text style={styles.logout}>Logout</Text>
                    </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    textBox: {
        width: '100%',
        alignItems: 'center'
        //marginLeft: 20,
    },
    detailsBox: {
        marginTop: 50,
        padding: 5,
        width: '90%',
        borderRadius: 10,
        shadowColor: "pink",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 8,
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 16
    },
    flatList:{
        width: '90%',
        borderRadius: 30,
        marginTop: 20
    },
    button: {
        marginTop: 20,
        backgroundColor: '#9c050a',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logout: {
        color: 'white',
        fontWeight: 'bold'
    },
    footer: {
        justifyContent: "flex-end", 
        flex: 2/3
    },
    setGenreText: {
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: 50,
        color: 'pink',
        fontSize: 16
    }
})