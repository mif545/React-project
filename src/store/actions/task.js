import axios from 'axios';
import * as ActionType from '../../actionTypes';

export const deleteTask=(id)=>{
    return{
        type:ActionType.TASK_DELETED,
        payload:id

    }
}

export const addTask=(task)=>{
    return{
        type:ActionType.TASK_ADDED,
        payload:task
    }
}

export const updateTask=(task)=>{
    return{
        type:ActionType.TASK_UPDATED,
        payload:task
    }
}

export const getAllTasks=(id)=>{
    return(dispach)=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(res=>{
            console.log(res.data);
            dispach(saveAllTasks(res.data))
        }).catch(err=>
           console.log(err)

        )
    }

    }
  
    export const saveAllTasks=(tasks)=>{
        return{
            type:ActionType.TASKS_SAVED,
            payload:tasks
        }
    }
