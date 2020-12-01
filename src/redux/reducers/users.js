import * as type from '../types/users.type';

const initialState = {
    userList: [],
    searchList: [],
    loading: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case type.FETCH_ALL:
            return {
                ...state,
                userList: action.payload,
                searchList: action.payload,
                loading: false
            }
        case type.SEARCH:
            const searchList = [...state.userList].filter(({name, username, email}) => {
                const str = `${name} ${username} ${email}`;

                return str.toLowerCase().includes(action.payload.toLowerCase());
            });
            return {
                ...state,
                searchList,
                loading: false
            }
        default:
            return state;
    }
}

export default userReducer;