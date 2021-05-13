import * as ActionType from '../../actionTypes';
const initialSatate={
    messege:null
}

 export const errorReducer=(state=initialSatate,action)=>{
 switch(action.type){
     case ActionType.ERROR_SETED:
        
         return{
             ...state,
             messege:action.payload
         }
     case ActionType.ERROR_REMOOVED:
         return{
             ...state,
             messege:null
   
            }

    default :
    return state;
     
 }
}