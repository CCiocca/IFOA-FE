export const UPDATE_PLACE = 'UPDATE_PLACE'


export const updatePlace = (place) => {
    return {
        type: UPDATE_PLACE,
        payload: place
    }
}

