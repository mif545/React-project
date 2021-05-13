import axios from 'axios';
import { useState } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setDialog } from '../store/actions';
import {addUser, registerUser} from '../store/actions/user';
import './formRegister.css';
import { validEmail,minMaxLength } from './Validation';

const Register = (props) => {
     
    let [userName,setUserName]=useState("");
    let [city,setCity]=useState("");
    let [street,setStreet]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let [lat,setLat]=useState("");
    let [lng,setLng]=useState("");
    let id
    let [dialog,setDialogs]=useState(false);

    let [errorEmail,setErrorEmail]=useState();
    let [errorName,setErrorName]=useState();
    let [error,setError]=useState(false);

    

const handleInputChange=(e) =>{
   const target = e.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   if(name==="userName")
   {
      setUserName(value); 
      if(minMaxLength(value,2,10)){
         setErrorName("שם משתמש לא תקין*")
         setError(true)
        }
        else{
           setErrorName("");
           setError(false)
        }
      
   }
   else if(name==="email"){
      setEmail(value)  
     if(validEmail(value)){
      setErrorEmail("מייל לא תקין*")
      setError(true)
     }
     
      else{
         setErrorEmail("")
         setError(false)
      }
      // checkValidetion(value);
     
   }
  else if(name==="city"){
   setCity(value)
   }
   else if(name==="street"){
      setStreet(value)
   }
   else if(name==="lng"){
      setLng(value)
   }
   else if(name==="lat"){
      setLat(value)
   }
   else if(name==="phone"){
      setPhone(value)
   }

 }

const newUser=(user)=>{
   registerUser(user)
   // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
   // .then(res => {
   //   console.log(res);
   //   console.log(res.data);    
   props.addUser({
      "id": props.arrUser.length+1,
      "username": userName,
      "addres": { "city": city, "street": street },
      "email": email,
      "phone":phone,
      "geo":{"lat":lat,"lng":lng}
  })
    props.setDialog({"messege":"added sucssefuly!","user":user})
   setDialogs(true)
}



const contactSubmit=(e)=>{
   if(!error){
   newUser();
   }else{
      alert("Form has errors.")
   }

}


 if(dialog)
 return <Redirect to={{pathname:"./dialog"}}/>
 else
    return (<div className="container">
       <div className="form">
       <h2>Register Form</h2>
       <form >
       <div className="inputBox">
        <input type="text" placeholder="username" name="userName" required value={userName} onChange={handleInputChange} />
        <span className="line"></span>
        </div>
        <div className="inputBox">
        <input type="text" placeholder="city" name="city" required value={city}onChange={handleInputChange} />
        <span className="line"></span>
        </div>
        <div className="inputBox">
        <input type="text" placeholder="street" name="street" required value={street} onChange={handleInputChange} />
        <span className="line"></span>
        </div>
        <div className="inputBox" style={{paddingBottom:"15px"}}>
        <input type="email" placeholder="email" name="email" required value={email} onChange={handleInputChange} />
        <span style={{fontSize: "13px",float:"right",marginRight:"50px"}}>{errorEmail}</span> 
        <span className="line"></span>
        </div>
        <div className="inputBox">
        <input type="text" placeholder="phone"name="phone" required value={phone} onChange={handleInputChange} />
        <span className="line"></span>
        </div>
        <div className="inputBox" >
        <input type="text" placeholder="lat" name="lat" required value={lat} onChange={handleInputChange} />
        <span className="line"></span>
        </div>
        <div className="inputBox">
        <input type="text" placeholder="lng" name="lng" required value={lng} onChange={handleInputChange} />
        <span className="line"></span>
        </div>
        <div className="inputBox">
         <input type="submit" value="register" onClick={() => contactSubmit()}/>
        </div>
        </form>
    </div>
    </div> 
     );
}

const mapStatetoProps=(state)=>{
    return{
       arrUser:state.user.usersList,
       messege:state.dialog.messege
       
    }
}

export default connect(mapStatetoProps,{addUser,setDialog,registerUser})(Register)