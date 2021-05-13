import { connect } from "react-redux";

const HistoreyTask = (props) => {
    let arr=props.arrTask.filter(item=>item.userId===props.user.id&&item.completed)
    return ( <div>
        {
          arr.map(item=>{
          return  <div>
          <b key={item.id}>{item.title }</b>   
          </div>
          }) 
        }   
    </div>  );
   
}
const mapDispachToProps=(state)=>{
    return{
       arrTask:state.task.tasksList,
       user:state.user.theUser
    }
}
export default connect(mapDispachToProps) (HistoreyTask);
