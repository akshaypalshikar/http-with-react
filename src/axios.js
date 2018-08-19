import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

instance.defaults.headers.post['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;