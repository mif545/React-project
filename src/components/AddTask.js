import { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {addTask} from '../store/actions'


const AddTask = (props) => {
    let title
    let completed
    let id
    let [moove,setMoove]=useState(false)
    const history = useHistory();

    const writeTitle=(e)=>{
     title=e.target.value
     id=props.arrTask.length+1
    }
    
   
    const cencel=()=>{
    document.getElementById("create-course-form").reset()

    setMoove(true)
    }

    const add=()=>{
        props.addTask({"id":id,"userId":props.user.id,"title":title,"completed":completed})
        setMoove(true)
    }
   if(moove)
   return <Redirect to="tasks"/>
    return (<>
       <form id="create-course-form">
        <p>
        <label>
         title of task:
         <input type="text"  onKeyUp={writeTitle}/>
        </label>
        </p>
        <input type="submit" value="add"  onClick={add} />
        <input type="button" value="cencel" onClick={cencel}/>
     </form>     
  </> );

  
}


const mapDispachToprops=(state)=>{
    return{
        arrTask:state.task.tasksList,
        user:state.user.theUser
    }
}
export default connect(mapDispachToprops,{addTask})(AddTask);