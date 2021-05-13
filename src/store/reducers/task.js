import * as ActionTypes from '../../actionTypes'
const initialstate={
    tasksList:[],
    currentTask:null
}

export const taskReducer=(state=initialstate,action)=>{
  switch(action.type)
  {
     case ActionTypes.TASK_ADDED:
         let arr=[...state.tasksList,action.payload]
         return{
             ...state,
             tasksList:arr
         } 
    case ActionTypes.TASK_DELETED:
        let brr=state.tasksList.filter(t=>t.id!==action.payload)
        return{
           ...state,
           tasksList:brr

        }
     
     case ActionTypes.TASK_UPDATED:
         let index=state.tasksList.findIndex(t=>t.id===action.payload.id);
         console.log(index)
         let crr = [...state.tasksList]; 
         console.log(crr[index])
         crr[index].completed = true
          return{
           ...state,
           tasksList:crr
          }   
     case ActionTypes.TASKS_SAVED:
       return{
         ...state,
         tasksList:action.payload
       } 
    default :
       return state;
   
  }
}