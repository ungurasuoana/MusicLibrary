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
            <Text style={styles.title}>
                {props.item.title} - {props.item.artist}
            </Text>
            <Text style={styles.description}>
                {props.item.genre}
            </Text>
            <Text style={styles.description}>
                {props.item.releaseDate.slice(0,10)}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 8
    },
    imgContainer: {
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    img: {
        width: 350,
        height: 250,
        borderRadius: 30,
        overflow: 'hidden',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    description: {
        color: 'black'
    },
})