import axios from 'axios';

const KEY = 'AIzaSyAxzQyclqz_C6ZUffYaL32ps-eYl9faL9Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});