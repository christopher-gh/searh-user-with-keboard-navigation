import * as type from '../types/users.type';
import * as api from '../../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({
            type: type.FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const searchUser = (payload) =>  {
    return {
        type: type.SEARCH,
        payload
    }
}