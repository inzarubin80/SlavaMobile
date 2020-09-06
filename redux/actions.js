import {
  INSET_FAVORITE,
  REMOVE_FAVORITE
} from './types'

export const addFavorite = (idProd) => {  
    return {
        type: INSET_FAVORITE,
        payload: idProd
    }
}

export const removeFavorite = (idProd) => {  
  return {
      type: REMOVE_FAVORITE,
      payload: idProd
  }
}

