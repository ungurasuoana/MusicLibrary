export const getMusic = async(
    page:number, 
    search: string, 
    dataFilter: string,
    genreFilter: string) => {
    let url = `https://645936c98badff578e07caaa.mockapi.io/music?`
    
    if(genreFilter !== '') {
        url = url + `&genre=${genreFilter}`
    }
    if(dataFilter !== '') {
        url = url + `&releaseDate=${dataFilter}`
    }
    if(search !== '') {
        url = url + `&title=${search}`
    }
    else {
        url = url + `&page=${page}&limit=10`
    }
    const response = await fetch(url)
    console.log(url)
    const json = await response.json()
    return json
}