import {
    INSET_FAVORITE
} from './types'


const initialState = {
    favorites: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INSET_FAVORITE: 
            return {...state, favorites: [...state.favorites, action.payload]}
        default:
            return state
    }
}
