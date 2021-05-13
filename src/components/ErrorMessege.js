import { connect } from "react-redux";

const ErrorMessege = (props) => {
    return ( <p>{props.messege } </p>  );
}
 const MapDispachToProps=(state)=>{
     return{
         messege=state.messege
     }
 }
export default connect(MapDispachToProps,{})(ErrorMessege);