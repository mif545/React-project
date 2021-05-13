import { useState } from "react";
import { connect } from "react-redux";
import {updateTask} from "../store/actions"

const Task = (props) => {
    let [completed,setComplited]=useState(props.theTask.completed)

   const handleInputChange=(e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        

        setComplited(value);
        props.updateTask(props.theTask)
        

    }
    return (<div><p>{props.theTask.title}</p>
                 <input type="checkbox" name="check" checked={completed}  onChange={handleInputChange}/>
       </div>  );
}
 
export default connect(null,{updateTask})(Task);