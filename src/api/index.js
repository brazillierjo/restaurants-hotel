import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/tips/list'
const options = {
    params: { location_id: '8014024', lang: 'en_US', currency: 'USD', limit: '20' },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '25120c0ae9msh14be9ba510a0d42p1778a1jsn9f72457ba0a7'
    }
}

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options)
        return data
    } catch (e) {
        console.log(e)
    }
}