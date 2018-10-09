export default (state = { index: 0, fade: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_SLIDE':
      return {
        ...state,
      index: action.payload
      }
    case 'UPDATE_FADE': 
      return {
        ...state,
        fade: action.payload
      }
   default:
    return state
  }
 }
 