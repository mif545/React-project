import * as ActionType from '../../actionTypes';
import { setError } from './error';
 import axios from 'axios'



export const logUser=(user)=>{
    return(dispach)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users?username=${user.userName}&email=${user.email}`)
        .then(res => {
            console.log(res.data[0])
            dispach(saveUser(res.data[0]))
           
       
        }).catch(err=>{
            console.log(err)
            dispach(setError("שגיאה"))
        })
    }
}

export const logOut=()=>{
    return{
      type:ActionType.LOG_OUT,
    }
}

export const saveUser=(user)=>{   
    return{
        type:ActionType.SAVE_USER,
        payload:user
    }
   }

   export const addUser=(user)=>{   
    return{
        type:ActionType.REGISTER_USER,
        payload:user
    }
   }

   
   export const addConfirnation=(messege)=>{   
    return{
        type:ActionType.CONFIRMATION_ADD,
        payload:messege
    }
   }

   export const registerUser=(user)=>{   
    return(dispach)=>{
        axios.post(`https://jsonplaceholder.typicode.com`,  user)
        .then(res => {
          console.log(res);
          console.log(res.data);
          
          dispach(addUser(user));
        //  dispach(setDialog({"messege":"added sucssefuly!","user":user}))
        }).catch(error=>{
            console.log(error)
        })
    }
  }
   
  export const getAllUser=()=>{   
    return(dispach)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{;
          console.log(response.data);
           dispach(saveAllUser(response.data))
        } )
    }
  }
   
export const saveAllUser=(users)=>{
   return{
       type:ActionType.USER_SAVED,
       payload:users
   }
}