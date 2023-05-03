import { View, Text, StyleSheet } from "react-native"

export const FavScreen = () => {
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
        backgroundColor: 'pink',
    },
    text: {
        color: 'black',
    }
})