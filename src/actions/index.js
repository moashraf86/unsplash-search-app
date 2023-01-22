import unslpash from "../api/unslpash"

export const fetchImages = (term) => {
  return async (dispatch) => {
    const response = await unslpash.get('/search/photos', {
      params: {
        query: term
      }
    })

    dispatch({type: 'FETCH_IMAGES', payload: response.data})
  }
}