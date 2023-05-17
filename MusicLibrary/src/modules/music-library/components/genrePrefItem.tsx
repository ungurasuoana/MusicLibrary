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
        style={[
            {
                 backgroundColor: press? 'white' : 'rgba(159, 168, 181, 0.6)',
                 borderColor: press? 'black' : 'white' 
            },
            styles.button]
            }>
            <Text         
            style={[{
                color: press? 'black' : 'white',   
                },styles.text]}
            >{props.data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderWidth: 0.5,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    }
})