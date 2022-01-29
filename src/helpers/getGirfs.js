const API_KEY = 'jLkzVaAbOIqivyQYAlrnfGaIt8fas2HW';

export const getGifs = async(category) => {
  try {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=${API_KEY}`;
    const resp = await fetch(URL);
    const {data} = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })
    return gifs;
  } catch (error) {
    console.log(error);
  }
}