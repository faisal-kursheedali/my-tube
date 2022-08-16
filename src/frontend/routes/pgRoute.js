import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
// import {Nav, SideNav} from '../components/import';
import {User,Home, Like, Login, Signup, VideoPLayer, Watchlater,History,Search} from '../pages/import';

import PrivateRoute from './privateRoute';
import RequirAuth from './requirAuth';

const PgRoute = () => {
  return (
    <>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/video:id' exact element={<VideoPLayer/>}/>
            <Route path='/search:value' exact element={<Search/>}/>
            <Route path='/like' element={
                <RequirAuth><Like/></RequirAuth>
            }/>
            <Route path='/watchlater' element={
                <RequirAuth>
                <Watchlater/>
            </RequirAuth>
            }/>
            <Route path='/user' element={
                <RequirAuth>
                <User/>
            </RequirAuth>
            }/>
            <Route path='/history' element={
                <RequirAuth>
                <History/>
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
  
    </>
  )
}

export default PgRoute