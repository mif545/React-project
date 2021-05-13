import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import { logUser} from "../store/actions/user";
import { getAllTasks} from "../store/actions/task";
import './form.css';


const LogIn = (props) => {
      let userName;
      let email;
     

      const writeUserName=(uName)=>{
         userName=uName.target.value;
         console.log(userName)
      }

      
      const writeEmail=(mail)=>{
        email=mail.target.value;
        console.log(email)
     }

     const login=()=>{
      props.logUser({"userName":userName,"email":email})
        
          
      
      
     }
   
     if(props.theUser)
     return <Redirect to={{pathname:"./enteruser/tasks"}}/>

    else
    return (<div>
        <div className="container">
         <div className="form">
            <h2>Login Form</h2>
            <div className="inputBox">
               <input type="text" placeholder="username" onKeyUp={writeUserName} />
               <span className="line"></span>
            </div>
            <div className="inputBox">
               <input type="email" placeholder="email" onKeyUp={writeEmail}/>
               <span className="line"></span>
            </div>
            <div className="inputBox">
               <input type="submit" value="Login" onClick={login}/>
            </div>
         </div>
       </div>
    </div>  );
}

const mapDispachToprops=(state)=>{
 return{
     theUser:state.user.theUser
 }
}
 
export default connect(mapDispachToprops,{logUser,getAllTasks})(LogIn);