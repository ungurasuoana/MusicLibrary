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

    return (
        <View style={styles.imgContainer}>
            <ImageBackground style={styles.img} source={{uri: coverPhoto}}>
                <Pressable 
                onPress={() => {onLike(), setLike(!like)}}
                style={styles.icon}>
                    {like?  
                    <HeartFull height={30} width={30}/> :
                    <HeartEmpty height={30} width={30}/>
                }
                </Pressable>
            </ImageBackground>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailsBox}>
            <Text style={styles.description}>Artist: {artist}</Text>
            </View>
            <View style={styles.detailsBox}>
            <Text style={styles.description}>Description: {description}</Text>
            </View>
            <View style={styles.detailsBox}>
            <Text style={styles.description}>Genre: {genre}</Text>
            </View>
            <View style={styles.detailsBox}>
            <Text style={styles.description}>Release date: {releaseDate.slice(0,10)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0,0.9)',
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'pink',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    img: {
        width: 300,
        height: 300,
        overflow: 'hidden',
        alignItems: 'flex-end',
        borderRadius: 25,
        shadowColor: "pink",
        shadowOffset: {
            width: 60,
            height: 20,
        },
        shadowOpacity: 1,
        //shadowRadius: 16.00,
        elevation: 16,
        marginBottom:30,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "black"
    },
    icon: {
        marginTop: 10,
        marginRight: 10,
    },
    detailsBox: {
        width: '90%',
        margin: 5,
        padding: 5,
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
    }
})