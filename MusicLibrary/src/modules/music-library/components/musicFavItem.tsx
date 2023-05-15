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

    const {updateFavs, user} = useAuthStore((state: UserState) => ({
        updateFavs: state.updateFavs,
        user: state.user,
    }))

   useEffect(() => {
    const likeState = user?.favSongs.find(item => item.id === props.item.id)
    if(likeState) {
        setLike(true)
    } else {
        setLike(false)
    }
   }, [like]) 

   const onLike = () => {
    if(!user) return    
    updateFavs(user, props?.item)
   }

    return(
        <View style={styles.container}>
        <ImageBackground style={styles.img} source={{uri: props.item.coverPhoto}}>
                <Pressable 
                onPress={() => {onLike(), setLike(!like)}}
                style={styles.icon}>
                    {like?  
                    <HeartFull height={40} width={40}/> :
                    <HeartEmpty height={40} width={40}/>
                }
                </Pressable>
            </ImageBackground>
        <Text style={styles.title}>
            {props.item.title} - {props.item.artist}
        </Text>
        <Text style={styles.description}>
            {props.item.genre}
        </Text>
        <Text style={styles.description}>
            {props.item.releaseDate.slice(0,10)}
        </Text>
    </View>
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
        alignItems: 'flex-end'
    },
    icon: {
        marginTop: 10,
        marginRight: 10,
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