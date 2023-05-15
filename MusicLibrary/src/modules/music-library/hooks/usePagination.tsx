import { useEffect, useState } from "react"
import { getMusic } from "../services/music.service"

export const usePagination = () => {
    const [page, setPage] = useState(1)
    const [thedata, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [end, setEnd] = useState(false)
    const [refresh, setRefresh] = useState(false)


    const onEndReached = () => {
        if (!loading && !loadingMore && !end) 
        {
            setPage(page + 1)
            setLoadingMore(true)
        }
    }

    const onRefresh = () => {
        if(!loading && !loadingMore && !refresh){
            setPage(1)
            setRefresh(true)
        }
    }

    useEffect(() => {
        getMusic(page, 'way').then((data: []) => {
            setData([...thedata,...data])
            setLoadingMore(false)
            setLoading(false)
            if (data.length === 0) {
                setEnd(true)
                console.log('THE END IS HERE')
            }
            if(page === 1 && refresh) {
                setRefresh(false)
                setEnd(false)
                console.log('HERE WE ARE REFRESHING')
            }
        })
    }, [page])

return {loading, loadingMore, refresh, onRefresh, onEndReached}
}