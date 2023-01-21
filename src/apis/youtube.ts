import axios from 'axios';
//  const KEY ='AIzaSyDruZsA-SQps5nb3TzE6tP468c0m3FAr68';
// const KEY ='AIzaSyCwhccq6mQ084RsTid9dMC41vY1racws3Q';
const KEY ='AIzaSyBjHb-4Bfrk3A5ql7WSj8yBHRXcOY41Aa0'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search?',
    params: {
        part: 'snippet',
        maxResults: 500000,
        key: KEY
    }
})