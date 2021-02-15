import {API_URL} from '../utils';
import axios from 'axios';

const instance = axios.create({baseURL: API_URL})

const getDayOneAllStatus = country => {
    return new Promise((resolve, reject) => {
        instance.get('/dayone/country/' + country)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
};

export default {
    getDayOneAllStatus
};