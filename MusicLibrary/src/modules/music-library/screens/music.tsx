import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import Modal from "react-native-modal";

/* 
endpoint: https://644958ebe7eb3378ca46e9bb.mockapi.io//api/v1/music?
queryParams: search, page, limit, field-name
*/ 
export const MusicScreen = () => {
    const [modal, setModal] = useState(false) 

    const showModal = () => { setModal(true) }
    const hideModal = () => { setModal(false) }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={showModal}>
                <Text>Show Modal</Text>
            </Pressable>
            <Modal style={styles.modalStyle} isVisible={modal}>
                <View style={styles.view}>
                   <Pressable style={styles.button} onPress={hideModal}> 
                    <Text>Hide Modal</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    modalStyle: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    text: {
        color: 'black',
    },
    view: {
        width: '100%',
        backgroundColor: 'white',
        height: '50%',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 30
    },
    button: {
        width: 100, 
        height: 50, 
        backgroundColor: 'lightblue', 
        borderRadius: 20 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})