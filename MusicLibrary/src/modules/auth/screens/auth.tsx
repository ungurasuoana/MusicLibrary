import { View, Text, StyleSheet } from "react-native"

export const AuthScreen = () => {
    return (
        <View
            style={styles.container}>
            <Text
            style={styles.text}>
                Hello Music
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    text: {
        color: 'black',
    }
})