import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-454a2.firebaseio.com/'
});

export default instance;