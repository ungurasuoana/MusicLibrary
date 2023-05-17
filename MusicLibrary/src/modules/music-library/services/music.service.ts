export const getMusic = async(
    page:number, 
    search: string, 
    dataFilter: string,
    genreFilter: string) => {
    let url = `https://645936c98badff578e07caaa.mockapi.io/music?&page=${page}&limit=10&genre=${genreFilter}&releaseDate=${dataFilter}&title=${search}`
    
    // if(genreFilter == '') {
    //     url = url 
    // }
    // if(dataFilter !== '') {
    //     url = url + `&releaseDate=${dataFilter}`
    // }
    // if(search !== '') {
    //     url = url + `&title=${search}`
    // }
    
    const response = await fetch(url)
    console.log(url)
    const json = await response.json()
    return json
}