import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => axios.get(url);