import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a8a11.firebaseio.com/'
});

export default instance;