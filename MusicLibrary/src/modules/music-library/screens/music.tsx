import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import { MusicList } from "../components/musicList";
import { SearchBar } from "../components/searchBar";
import { getMusic } from "../services/music.service";
import { FilterModal } from "../components/filterModal";
import { useDebounce } from "../hooks/useDebounce";

/* 
endpoint: https://644958ebe7eb3378ca46e9bb.mockapi.io//api/v1/music?
queryParams: search, page, limit, field-name
*/
export const MusicScreen = () => {
    const [page, setPage] = useState(1)
    const [jsonResponse, setJsonResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [end, setEnd] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [search, setSearch] = useState<string>('')
    const [dataFilter, setDataFilter] = useState('')
    const [genreFilter, setGenreFilter] = useState('')

    const searchVal = useDebounce(search, 1000)

    const onDatePress = (newDate: string) => {setDataFilter(newDate)}
    const onGenrePress = (newGenre : string) => {setGenreFilter(newGenre)}

    const onEndReached = () => {
        if (!loading && !loadingMore && !end) {
            setPage(page + 1)
            setLoadingMore(true)
        }
    }

    const onRefresh = () => {
        if (!loading && !loadingMore && !refresh) {
            setPage(1)
            setRefresh(true)
            setSearch('')
            setDataFilter('')
            setGenreFilter('')
        }
    }
    console.log(genreFilter)

    useEffect(() => {
        getMusic(page, search, dataFilter, genreFilter).then((data: []) => {
            if ((search !== '' || dataFilter !== '' || genreFilter !== '') && page === 1) {
                setJsonResponse(data)
            }
            else 
            {   
                setJsonResponse([...jsonResponse, ...data])
            }
            setLoadingMore(false)
            setLoading(false)
            if (data.length === 0) {
                setEnd(true)
                console.log('THE END IS HERE')
            }
            if (page === 1 && refresh) {
                setRefresh(false)
                setEnd(false)
                console.log('HERE WE ARE REFRESHING')
            }
        })
    }, [page, searchVal, dataFilter, genreFilter])

    useEffect(() => {
        setPage(1);
      }, [searchVal, dataFilter , genreFilter]);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
            <SearchBar search={search} onChangeText={setSearch} />
            <FilterModal setDataFilter={onDatePress} setGenreFilter={onGenrePress}/>
            </View>
            <MusicList
                data={jsonResponse}
                loadingMore={loadingMore}
                onEndReached={onEndReached}
                refresh={refresh}
                onRefresh={onRefresh}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
        height: 60,
    }
})