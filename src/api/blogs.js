import axios from 'axios'
export async function fetchBlogsData(offset = 0, limit = 25){
    const options = {
      method: 'GET',
      url: 'https://netflix-data.p.rapidapi.com/season/episodes/',
      params: {
        ids: '80077209,80117715,80077209,80117715,80077209,80117715,80077209,80117715',
        offset: String(offset),
        limit: String(limit)
      },
      headers: {
        'x-rapidapi-key': 'f97fe92b3amsh5b22f32bd9c596cp1db694jsna96129f19085',
        'x-rapidapi-host': 'netflix-data.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response);
        return response.data
    } catch (error) {
        console.error(error);
    }
}