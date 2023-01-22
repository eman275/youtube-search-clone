import axios from 'axios';
const KEY ='AIzaSyB_njuDJ8Up6EGAOTzD_2WMf8F4VEnd5to'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search?',
    params: {
        part: 'snippet',
        maxResults: 500000,
        key: KEY
    }
})