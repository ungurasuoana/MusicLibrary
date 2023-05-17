import { View, Text, StyleSheet, ListRenderItemInfo, FlatList, ActivityIndicator } from "react-native"
import { MusicListRef } from "../types/musicListRef"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { useEffect } from "react"
import { MusicFavItem } from "../components/musicFavItem"

export const FavScreen = () => {

    const { user, updateFavs } = useAuthStore((state: UserState) => ({
        user: state.user,
        updateFavs: state.updateFavs
    }))

    const renderItem = ({ item }: ListRenderItemInfo<MusicListRef>) =>
        <MusicFavItem item={item} />
    return (
        <View style={styles.container}>
            <FlatList
                data={user?.favSongs}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<ActivityIndicator />}
                ListHeaderComponent={<Text style={styles.header}>
                    Total number of favorite songs: {user?.favSongs.length}
                </Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    header: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    }
})