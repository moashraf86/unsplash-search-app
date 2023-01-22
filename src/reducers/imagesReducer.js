
export const imagesReducer =  (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
        return {...state, images:action.payload}
  
    default:
      return state
  }
}