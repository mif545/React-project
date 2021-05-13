import { connect } from "react-redux";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import HistoryTask from "./HistoryTask";
import Tasks from "./Tasks";
import {getAllTasks} from '../store/actions'
import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import AddTask from "./AddTask";
import {logOut} from "../store/actions"
const EnterUser = (props) => {
    const {url}=useRouteMatch();
    useEffect(()=>{
      props.getAllTasks(props.currentUser.id);
    
    },[])
    const toLogOut=()=>{
       props.logOut()
    }
    return (<>
         <Nav className="justify-content-end"   activeKey="/tasks" > 
     <Nav.Item>
      <Link to={`${url}/tasks`}>המשימות שלי</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to={`${url}/history`}>היסטורית המשימות שלי</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to={`${url}/addtask`}>הוספת משימה</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/logout" onClick={toLogOut}>יציאה</Link>
    </Nav.Item>
    </Nav>
        <Switch>
      
      <Route path={`${url}/tasks`}>
        <Tasks/>
      </Route>
      <Route path={`${url}/history`}>
        <HistoryTask/>
      </Route>
      <Route path={`${url}/addtask`}>
        <AddTask/>
      </Route>
      
      </Switch>
      
      </>  );
}
const mapDispachToProps=(state)=>{
  return{
     currentUser:state.user.theUser
  }
}
export default connect(mapDispachToProps,{getAllTasks,logOut})(EnterUser);