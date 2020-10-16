import React,{ createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import Order from './components/Customer/Order/Order';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import Review from './components/Customer/Review/Review';
import AddService from './components/Admin/AddService/AddService';
import MainDashboard from './components/MainDashboard/MainDashboard';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AdminServiceList from './components/Admin/AdminServiceList/AdminServiceList';

export const UserContext = createContext()
export const ServiceContext=createContext()

function App() {
  const[selectService,setSelectservice]=useState({});
  const [user, setUser] = useState({
    name:'',
    email:'',
    photo:'',
    isAdmin: false
  })
  
  return (
<UserContext.Provider value={[user, setUser]}>
<ServiceContext.Provider value={[selectService,setSelectservice]}>
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
       <Login></Login>
        </Route>
      <PrivateRoute path="/order">
      <Order></Order>
      </PrivateRoute>
      <PrivateRoute path="/clientServiceList">
     <ServiceList></ServiceList>
      </PrivateRoute>
      <PrivateRoute path="/review">
     <Review></Review>
      </PrivateRoute>
      <PrivateRoute path="/addService">
     <AddService></AddService>
      </PrivateRoute>
      <PrivateRoute path="/mainDashboard">
    <MainDashboard></MainDashboard>
      </PrivateRoute>
      <PrivateRoute path="/makeAdmin">
    <MakeAdmin></MakeAdmin>
      </PrivateRoute>
      <PrivateRoute path="/adminServiceList">
    <AdminServiceList></AdminServiceList>
      </PrivateRoute>
      <Route path="/">
      <Home></Home>
        </Route>
      </Switch>
    </Router>
    </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
