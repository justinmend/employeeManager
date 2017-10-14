import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
          key="employeeList"
          onRight={() => Actions.employeeCreate()}
          onLeft={() => firebase.auth().signOut().then(() => Actions.pop())}
          rightTitle="Add"
          leftTitle="Logout"
          component={EmployeeList}
          title="Employees"
          titleStyle={{ paddingLeft: 70 }}
          initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
