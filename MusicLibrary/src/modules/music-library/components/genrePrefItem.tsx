import { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import { UserState, useAuthStore } from "../../auth/store/useAuthStore"

interface Props {
    data: string
}

export const GenrePrefItem = (props: Props) => {
    const [press, setPress] = useState(false)

    const {updatePref, user} = useAuthStore((state: UserState) => ({
        updatePref: state.updatePref,
        user: state.user,
    }))

   useEffect(() => {
    const likeState = user?.favGenre.find(item => item === props.data)
    if(likeState) {
        setPress(true)
    } else {
        setPress(false)
    }
   }, [press]) 

   const onPress = () => {
    if(!user) return    
    updatePref(user, props?.data)
   }
    return(
        <Pressable onPress={() => {onPress(), setPress(!press)}}
        style={() => [
            {
                 backgroundColor: press? 'white' : 'grey'
            },
            styles.button]
            }>
            <Text style={styles.text}>{props.data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
    }
})