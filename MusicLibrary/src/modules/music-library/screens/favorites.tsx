import { View, Text, StyleSheet, ListRenderItemInfo, FlatList, ActivityIndicator } from "react-native"
import { MusicListRef } from "../types/musicListRef"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { useEffect } from "react"
import { MusicFavItem } from "../components/musicFavItem"

export const FavScreen = () => {

    const {user, updateFavs} = useAuthStore((state: UserState) => ({
        user: state.user,
        updateFavs: state.updateFavs
    }))

    useEffect(() => {
        console.log(user?.favSongs)
    })

    const renderItem = ({ item }: ListRenderItemInfo<MusicListRef>) =>
        <MusicFavItem item={item} />
    return (
        <View style={styles.container}>
            <FlatList
            data={user?.favSongs}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<ActivityIndicator/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee3ff',
        flex: 1
    },
})