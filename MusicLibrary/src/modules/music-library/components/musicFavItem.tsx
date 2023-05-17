import { Pressable, View, Image, Text, StyleSheet, ImageBackground } from "react-native"
import { MusicListRef } from "../types/musicListRef"
import { HeartEmpty, HeartFull } from "../../../assets/icons"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { useEffect, useState } from "react"

interface Props {
    item: MusicListRef
}

export const MusicFavItem = (props: Props) => {
    const [like, setLike] = useState(false)

    const { updateFavs, user } = useAuthStore((state: UserState) => ({
        updateFavs: state.updateFavs,
        user: state.user,
    }))

    useEffect(() => {
        const likeState = user?.favSongs.find(item => item.id === props.item.id)
        if (likeState) {
            setLike(true)
        } else {
            setLike(false)
        }
    }, [like])

    const onLike = () => {
        if (!user) return
        updateFavs(user, props?.item)
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.img} source={{ uri: props.item.coverPhoto }} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>
                    {props.item.title} - {props.item.artist}
                </Text>
                <Text style={styles.description}>
                    {props.item.genre}
                </Text>
                <Text style={styles.description}>
                    {props.item.releaseDate.slice(0, 10)}
                </Text>
            </View>
            <Pressable
                onPress={() => { onLike(), setLike(!like) }}
                style={styles.icon}>
                {like ?
                    <HeartFull height={30} width={30} /> :
                    <HeartEmpty height={30} width={30} />
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'pink',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center'
    },
    detailsContainer: {
        marginLeft: 10,
        width: '70%'
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: 1
    },
    icon: {
//
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