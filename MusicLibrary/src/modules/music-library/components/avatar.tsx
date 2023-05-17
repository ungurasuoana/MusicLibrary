import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Users } from "../../auth/types/users"
import { AnimatedCircle } from "./animatedCircle"
import Animated from "react-native-reanimated"

interface Props {
    user: Users | null
}

export const Avatar = (props: Props) => {
    return (
        
        <View style={{justifyContent:'center', alignItems:'center'}}>
            { [1,2,3].map((item) =>  <AnimatedCircle index={item}/>)}
        <View style={styles.container}>
            {props.user?.profilePicture ? (
                <Image style={styles.image} source={{ uri: props.user?.profilePicture }} />
            ) : (
                <Text style={styles.text}>
                    {props.user?.username?.slice(0, 1)}
                </Text>
            )
            }
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 75,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'pink',
        borderWidth: 2,
        // overflow: 'hidden'
        zIndex: 3,
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 50,
        zIndex: 3
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 75,
        zIndex: 3,
    }
})