import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Users } from "../../auth/types/users"

interface Props {
    user: Users | null
}

export const Avatar = (props: Props) => {

    return (
        <View style={styles.container}>
            {props.user?.profilePicture ? (
                <Image style={styles.image} source={{ uri: props.user?.profilePicture }} />
            ) : (
                <Text style={styles.text}>
                    {props.user?.username.slice(0, 1)}
                </Text>
            )
            }
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
        borderColor: 'black',
        borderWidth: 3,
        overflow: 'hidden'
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 50
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
})