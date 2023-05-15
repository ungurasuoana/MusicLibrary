import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import { HeartEmpty, HeartFull } from "../../../assets/icons"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"
import { useEffect, useState } from "react"

export const CardDetails = (props: any) => {
    const { id, title, artist, coverPhoto, genre, description, releaseDate } = props?.route.params
   // useEffect(() => { console.log(props.route.params) }, [])

   const [like, setLike] = useState(false)

    const {updateFavs, user} = useAuthStore((state: UserState) => ({
        updateFavs: state.updateFavs,
        user: state.user,
    }))

   useEffect(() => {
    const likeState = user?.favSongs.find(item => item.id === id)
    if(likeState) {
        setLike(true)
    } else {
        setLike(false)
    }
   }, [like]) 

   const onLike = () => {
    if(!user) return    
    updateFavs(user, props?.route.params)
   }

//useEffect(() => console.log(user?.favSongs),[])

    return (
        <View style={styles.imgContainer}>
            <ImageBackground style={styles.img} source={{uri: coverPhoto}}>
                <Pressable 
                onPress={() => {onLike(), setLike(!like)}}
                style={styles.icon}>
                    {like?  
                    <HeartFull height={40} width={40}/> :
                    <HeartEmpty height={40} width={40}/>
                }
                </Pressable>
            </ImageBackground>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{artist}</Text>
            <Text style={styles.description}>{genre}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{releaseDate.slice(0,10)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#eee3ff',
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 5
    },
    description: {
        color: 'black',
        fontSize: 16
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
    }
})