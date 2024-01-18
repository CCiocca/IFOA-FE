export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'


export const addFavourite = (company) => {
    return {
        type: ADD_FAVOURITE,
        payload: company
    }
}

export const removeFavourite = (company) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: company
    }
}