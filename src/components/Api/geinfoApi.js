export const getApiGif = async (category)=>{
    const api_key = '3TbW4H1m0iwYRIR7QpVPH1cuMZCRwf54'
    const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api_key}`
    const responseData = await fetch(URL)
    const {data} = await responseData.json()
    const Gif_Map = data.map((img)=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.original.url,
        }

    })
    console.log("-->",Gif_Map)
}