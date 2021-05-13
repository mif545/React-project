
import './App.css';
import LogIn from './LogIn';
import Register from './Register';
import {Link, Route, Switch} from 'react-router-dom'
import HistoryTask from './HistoryTask';
import Tasks from './Tasks';
import AddTask from './AddTask';
import EnterUser from './EnterUser';
import Dialog from './Dialog';
import { Nav } from 'react-bootstrap';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getAllUser} from '../store/actions'


function App(props) {
   useEffect(()=>{
    props.getAllUser();
   },[])

  
  return (
    <>
    <div className="App">
    <Nav className="justify-content-end"   activeKey="/login" > 
    <Nav.Item>
      <Link to="/login">כניסה</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/register">הרשמה</Link>
    </Nav.Item>
    </Nav>
   
    <Switch>
      <Route path="/login">
        <LogIn/>
      </Route>
      <Route path="/register">
        <Register/>       
      </Route>
     ` <Route path="/enteruser">
          <EnterUser/>
      </Route>  
      <Route path="/dialog">
          <Dialog/>
      </Route>  
    </Switch>

    </div>
    </>
   
  );
    

}

export default connect(null,{getAllUser})(App) ;
