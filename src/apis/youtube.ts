import axios from 'axios';
const KEY ='AIzaSyBDcql3R-vc5p9cotbGWAkRNtd2dqnl48g'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search?',
    params: {
        part: 'snippet',
        maxResults: 500000,
        key: KEY
    }
})