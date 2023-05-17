import { Pressable, View, Image, Text, StyleSheet } from "react-native"
import { MusicListRef } from "../types/musicListRef"

interface Props {
    item: MusicListRef
    onPress: () => void
}

export const MusicListItem = (props: Props) => {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Image style={styles.img} source={{ uri: props.item.coverPhoto }} />
            <View style={styles.detailsContainer}>
            <Text style={styles.title}>
                {props.item.title} 
            </Text>
            <Text style={styles.description}>{props.item.artist}</Text>
            <Text style={styles.description}>
                {props.item.releaseDate.slice(0,10)}
            </Text>
            </View>
            <Text style={[styles.description, {alignItems:'flex-start', color:'pink'}]}>
                {props.item.genre.slice(0,10)}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "pink",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 3,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    detailsContainer: {
        marginLeft: 10,
        width: '60%'   
     },
    img: {
        width: 60,
        height: 60,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        color: 'white'
    },
})