import { useState } from "react";
import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import { saveUser } from "../store/actions";




const Dialog = (props) => {
    let [added,setAdded]=useState(false);
    const approve=()=>{
      setAdded(true);
    
}

if(added) 
  return <Redirect to={{pathname:"./enteruser/tasks"}}/>
else  
return  (<><div>{props.dialog.messege}</div> 
  <input type="button" value="אשר" onClick={approve}/>
  </> );
}


 const mapDispachToProps=(state)=>{
  return{
      dialog:state.dialog.messege,
     
  }
 }

export default connect(mapDispachToProps,saveUser)(Dialog) ;