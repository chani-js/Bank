import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Router} from 'react-router-dom';
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import User from './components/pages/User';
import { getUser } from './services/user-service';
import { GET_USER_PROFILE } from './components/store/actions/constants';


const App = () => {      
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  useEffect(() => {
        if (jwt) {
            getUser(jwt).then(user => {
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: user
                });
            });
        }
  }, [dispatch, jwt]);
  
    return (
      <Router>
        <Route exact path="/" component={Index} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/user" component={User} />
      </Router>
    )
}
export default App
