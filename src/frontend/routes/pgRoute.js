import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import {Nav} from '../components/import';
import {Home, Like, Login, Signup, Watchlater} from '../pages/import';
import PrivateRoute from './privateRoute';
import RequirAuth from './requirAuth';

const PgRoute = () => {
  return (
    <Router>
        <Nav/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/like' element={
                <RequirAuth><Like/></RequirAuth>
            }/>
            <Route path='/watchlater' element={
                <RequirAuth>
                <Watchlater/>
            </RequirAuth>
            }/>
            <Route path='/login' element={
                <PrivateRoute>
                    <Login/>
                </PrivateRoute>
            }/>
            <Route path='/signup' element={
                <PrivateRoute>
                <Signup/>
            </PrivateRoute>
            }/>
            
        </Routes>
    </Router>
  )
}

export default PgRoute