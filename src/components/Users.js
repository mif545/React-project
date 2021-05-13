import { connect } from "react-redux";

const Users = (props) => {
   
   return ( <>
    {
         props.arrUser.map(item=>{
             return <div key={item.id}>{item.username}</div>
         })
    }
    </> );
}
const mapDispachToProps=(state)=>{
  return{
      arrUser:state.user.usersList
  }
}
 
export default connect(mapDispachToProps)(Users);