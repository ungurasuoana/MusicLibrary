import { StyleSheet, View, FlatList, ListRenderItemInfo, ActivityIndicator } from "react-native"
import { MusicListItem } from "./musicListItem"
import { MusicListRef } from "../types/musicListRef"
import { useNavigation } from "@react-navigation/native"
import { MainRoutes } from "../navigation/routes/main-routes"

interface Props {
    data: MusicListRef[] 
    loadingMore: boolean
    onEndReached: () => void
    refresh: boolean
    onRefresh: () => void
}

export const MusicList = (props: Props) => {
    const navigation = useNavigation()


    const renderItem = ({ item }: ListRenderItemInfo<MusicListRef>) =>
        <MusicListItem item={item} onPress={() => navigation.navigate(MainRoutes.CardDetails, item)} />
    return (
        <View style={styles.list}>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={props.loadingMore ? <ActivityIndicator /> : <View />}
                onEndReached={props.onEndReached}
                onEndReachedThreshold={1}
                refreshing={props.refresh}
                onRefresh={props.onRefresh}
                ListEmptyComponent={<ActivityIndicator/>}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                contentContainerStyle={ 
                    !props.data?.length ?
                    {flex:1, justifyContent:'center'} :
                   {} 
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'black',
        flex: 1
    },
    itemSeparator: {
        height: 1,
        width: '98%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: "pink",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 1,
    }
})