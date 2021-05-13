import * as ActionType from '../../actionTypes';
const initialSatate={
    messege:null
}

 export const dialogReducer=(state=initialSatate,action)=>{
 switch(action.type){
     case ActionType.DIALOG_SETED:
        
         return{
             ...state,
             messege:action.payload
         }
    

    default :
    return state;
     
 }
}