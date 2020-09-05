import {
  INSET_FAVORITE
} from './types'


export const addFavorite = (idProd) => {
    return {
        type: INSET_FAVORITE,
        payload: idProd
    }
}

