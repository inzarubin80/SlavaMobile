import {
    INSET_FAVORITE,
    REMOVE_FAVORITE
} from './types'

const initialState = {
    favorites: []
};

export default (state = initialState, action) => {

    console.log('appReducer');

    switch (action.type) {

        case INSET_FAVORITE:

            if (state.favorites.includes(action.payload)) {
                return { ...state, favorites: [...state.favorites] }
            }
            else {
                return { ...state, favorites: [...state.favorites, action.payload] }
            }
        case REMOVE_FAVORITE:

            index = state.favorites.indexOf(action.payload);
            return { ...state, favorites: [...state.favorites.slice(0, index), ...state.favorites.slice(index + 1)] }

        default:
            return state
    }
}
