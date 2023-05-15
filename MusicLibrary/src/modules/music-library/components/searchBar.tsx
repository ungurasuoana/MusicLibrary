import { View, TextInput, StyleSheet } from "react-native"

interface Props {
    search: string
    onChangeText: (value: string) => void
}

export const SearchBar = (props:Props) => {
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.search}
            value={props.search}
            onChangeText={props.onChangeText}
            placeholder="search for a song..."
            placeholderTextColor={'grey'}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink', 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    search:{
        width: '90%', 
        height: 40,
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 10,
        borderRadius: 20
    }
})