export const SET_FAVOURITE = 'SET_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'


export const addFavourite = (newCompany) => {
    return {
        type: SET_FAVOURITE,
        payload: newCompany
    }
}

