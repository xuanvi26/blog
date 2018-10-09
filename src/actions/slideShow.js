export const changeSlide = (payload) => dispatch => {
  dispatch({
   type: 'CHANGE_SLIDE',
   payload,
  })
 }

 export const updateFade = (payload) => dispatch => {
  dispatch({
    type: 'UPDATE_FADE',
    payload
  })
 }