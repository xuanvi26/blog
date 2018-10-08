export default (state = { index: 0 }, action) => {
  switch (action.type) {
   case 'CHANGE_SLIDE':
    return {
     index: action.payload
    }
   default:
    return state
  }
 }
 