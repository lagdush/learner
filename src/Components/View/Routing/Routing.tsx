import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginView from '../LoginView/LoginView';
import StudentView from '../StudentView/StudentView';


const Routing: React.FC = () => {
   return (
     <Router>
       <Switch>
         <Route path="/login" exact>
           <LoginView />
         </Route>
         <Route exact path="/">
           <Redirect to="student/" />
         </Route>
         <Route path="/student/" exact>
           <StudentView />
         </Route>
         <Route path="/student/:id" exact>
           <StudentView />
         </Route>
       </Switch>
     </Router>
   );
   }


   export default Routing