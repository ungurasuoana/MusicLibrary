import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import Modal from "react-native-modal";

interface Props {
    setDataFilter: (value: string) => void
    setGenreFilter: (value: string) => void
}

export const FilterModal = (props: Props) => {
    const [modal, setModal] = useState(false)
    const [seventies, setSeven] = useState(false)
    const [eighties, setEight] = useState(false)
    const [nineties, setNine] = useState(false)
    const [metal, setMetal] = useState(false)
    const [rock, setRock] = useState(false)
    const [hiphop, setHipHop] = useState(false)

    const showModal = () => { setModal(true) }
    const hideModal = () => { setModal(false) }

    const dateFilter = (state: string) => {
        if (state === '197') {
            setEight(false)
            setNine(false)
            props.setDataFilter(state)
        }
        else if (state === '198') {
            setSeven(false)
            setNine(false)
            props.setDataFilter(state)
        }
        else if (state === '199') {
            setSeven(false)
            setEight(false)
            props.setDataFilter(state)
        }
        else if (seventies == false && eighties == false && nineties == false) {
            props.setDataFilter('')
        }
    }

    const genreFilter = (state: string) => {
        if (state === 'metal') {
            setRock(false)
            setHipHop(false)
            props.setGenreFilter(state)
        }
        else if (state === 'rock') {
            setMetal(false)
            setHipHop(false)
            props.setGenreFilter(state)
        }
        else if (state === 'hip hop') {
            setMetal(false)
            setRock(false)
            props.setGenreFilter(state)
        }
        else if (metal == false && rock == false && hiphop == false) {
            props.setDataFilter('')
        }
    }
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

                    <Text style={styles.text}>Filter by age</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Pressable
                            onPress={() => {
                                dateFilter('197'),
                                    setSeven(!seventies)
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    backgroundColor: seventies ? 'red' : 'lightblue',
                                }
                                ]}>
                            <Text>70'</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                dateFilter('198'),
                                    setEight(!eighties)
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    backgroundColor: eighties ? 'red' : 'lightblue',
                                }
                                ]}>
                            <Text>80'</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                dateFilter('199')
                                setNine(!nineties)
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    backgroundColor: nineties ? 'red' : 'lightblue',
                                }
                                ]}>
                            <Text>90'</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.text}>Filter by genre</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable
                            onPress={() => {
                                genreFilter('metal')
                                setMetal(!metal)
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    backgroundColor: metal ? 'red' : 'lightblue',
                                }
                                ]}>
                            <Text>metal</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                genreFilter('rock')
                                setRock(!rock)
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    backgroundColor: rock ? 'red' : 'lightblue',
                                }
                                ]}>
                            <Text>rock</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                genreFilter('hip hop')
                                setHipHop(!hiphop)
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    backgroundColor: hiphop ? 'red' : 'lightblue',
                                }
                                ]}>
                            <Text>hip-hop</Text>
                        </Pressable>
                    </View>
                                {/* <Pressable 
                                onPress={() => {
                                    dateFilter(''),
                                    genreFilter('')
                                }}
                                style={[styles.button, {backgroundColor: 'red'}]}
                                >
                                    <Text>Clear Filters</Text>
                                </Pressable> */}
                </View>
            </Modal>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
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
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})