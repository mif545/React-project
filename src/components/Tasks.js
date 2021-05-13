
import axios from "axios";
import {  useState } from "react";
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
import { deleteTask,getAllTasks } from "../store/actions";
import Task from "./Task";



const Tasks = (props) => {
    let [add,setAdd]=useState(false);
    let [filter,setFilter]=useState("")
    const toAddTask=()=>{
        setAdd(true)    
    }
    const filters=(text)=>{
      setFilter(text.target.value)
    }
    const todelete=(id)=>{
        console.log(id)
        props.deleteTask(id);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    if(add){
        return  <Redirect to={"/enteruser/addtask"}/>
    } 
    else
    return ( 
    <>
    <div>
         <div><b>{props.currentUser.username} ברוכה הבאה</b></div>
         <input type="text" onChange={filters}/>
        {   
         props.arrTask.map(item=>{ 
         if(!item.completed&&item.title.includes(filter))
             return <div>
                 <Task key={item.id} theTask={item} /> 
                 <input type="button" value="delete" onClick={()=>{todelete(item.id)}}/>
             </div>  
          }) 
        }  
        <input type="button" value="to add task" onClick={toAddTask}/>
    
    </div> </>
    
    );

}
 const mapDispachToProps=(state)=>{
     return{
        arrTask:state.task.tasksList,
        currentUser:state.user.theUser
     }
 }
export default connect(mapDispachToProps,{deleteTask,getAllTasks})(Tasks);       