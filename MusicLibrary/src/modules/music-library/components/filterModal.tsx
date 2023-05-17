import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import Modal from "react-native-modal";
import { DropIcon, FilterIcon } from "../../../assets/icons";

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

    useEffect(() => {
        dateFilter
    }, [seventies, eighties, nineties])
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
        // else if (!seventies && !eighties && !nineties) {
        //     props.setDataFilter('')
        // }
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
    }

    useEffect(() => {
        if (metal && rock  && hiphop ) {
            props.setDataFilter('')
        }
    },[metal,rock,hiphop])

    return (
        <View style={styles.container}>
            <Pressable style={styles.filter} onPress={showModal}>
                <FilterIcon width={20} height={20} />
            </Pressable>
            <Modal style={styles.modalStyle} isVisible={modal}>
                <View style={styles.view}>
                    <Text style={styles.text}>Filter by age</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Pressable
                            onPress={() => {
                                if(!seventies){
                                    props.setDataFilter('')
                                    setSeven(!seventies)
                                }
                                else{
                                setSeven(!seventies),
                                dateFilter('197')}
                            }}
                            style={() =>
                                [styles.button,
                                    {borderColor: seventies ? 'white' : 'black'}
                                    ]}>
                                <Text style={[{
                                    fontWeight: seventies ? 'bold' : 'normal',
                                }, styles.textButton]}>70'</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {                                
                                if(!eighties){
                                props.setDataFilter('')
                                setEight(!eighties)
                            }
                            else{
                                dateFilter('198'),
                                    setEight(!eighties)}
                            }}
                            style={() =>
                                [styles.button,
                                    {borderColor: eighties ? 'white' : 'black'}
                                    ]}>
                                <Text style={[{
                                    fontWeight: eighties ? 'bold' : 'normal',
                                }, styles.textButton]}>80'</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                if(!nineties){
                                    props.setDataFilter('')
                                    setNine(!nineties)
                                }
                                else { 
                                dateFilter('199')
                                setNine(!nineties)}
                            }}
                            style={() =>
                                [styles.button,
                                    {borderColor: nineties ? 'white' : 'black'}
                                    ]}>
                                <Text style={[{
                                    fontWeight: nineties ? 'bold' : 'normal',
                                }, styles.textButton]}>90'</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.text}>Filter by genre</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable
                            onPress={() => {
                                if(!metal){
                                    props.setDataFilter('')
                                    setMetal(!metal)
                                }
                                else{
                                genreFilter('metal')
                                setMetal(!metal)}
                            }}
                            style={() =>
                                [styles.button,
                                    {borderColor: metal ? 'white' : 'black'}
                                    ]}>
                                <Text style={[{
                                    fontWeight: metal ? 'bold' : 'normal',
                                }, styles.textButton]}>metal</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                if(!rock){
                                    props.setDataFilter('')
                                    setRock(!rock)
                                }
                                else{
                                genreFilter('rock')
                                setRock(!rock)}
                            }}
                            style={() =>
                                [styles.button,
                                {borderColor: rock ? 'white' : 'black'}
                                ]}>
                            <Text style={[{
                                fontWeight: rock ? 'bold' : 'normal',
                            }, styles.textButton]}>rock</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                if(!hiphop){
                                    props.setDataFilter('')
                                    setHipHop(!hiphop)
                                }
                                else{
                                genreFilter('hip hop')
                                setHipHop(!hiphop)}
                            }}
                            style={() =>
                                [styles.button,
                                {
                                    borderColor: hiphop ? 'white' : 'black',
                                }
                                ]}>
                            <Text style={[{
                                fontWeight: hiphop ? 'bold' : 'normal',
                            }, styles.textButton]}>hip-hop</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={hideModal}>
                        <DropIcon width={35} height={100}/>
                    </Pressable>
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
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    modalStyle: {
        justifyContent: 'flex-start',
        marginTop: 200,
    },
    text: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
    },
    view: {
        width: '100%',
        backgroundColor: 'black',
        height: '40%',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 40,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70
    },
    filter: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30
    },
    button: {
        width: 80,
        height: 40,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        marginTop: 10,
        borderWidth: 3
    },
    textButton: {
        fontSize: 14,
        color: 'white'
    }
})