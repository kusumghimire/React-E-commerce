 import { UserActionTypes } from './user.types.js'

 const INITIAL_STATE = {
     currentUser: null
 }
 const userReducer = (state = INITIAL_STATE, aciton) => {
     switch (aciton.type) {
         case UserActionTypes.SET_CURRENT_USER:
             return {
                 ...state,
                 currentUser: aciton.payload
             }
         default:
             return state;
     }
 }

 export default userReducer;