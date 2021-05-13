import { connect } from "react-redux";
const ListTask = (props) => {
    console.log(props.arrTask)
    return (<>
     <div>   
      {   
        props.arrTask.map(item=>{ 
        return  <div key={item.id}>
        <b >{item.title }</b>
        </div> 
         }) 
      }
     </div> </>  );
}
 
const mapDispachToProps=(state)=>{
    return{
       arrTask:state.task.tasksList
    }
}
export default connect(mapDispachToProps)(ListTask);    