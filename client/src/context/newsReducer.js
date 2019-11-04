import {
LIKE_NEWS

} from '../types'

export default (state,action) => {
  switch (action.type) {
    case LIKE_NEWS:
      return{
        ...state
      }
    
    default: 
      return state;
  }
}