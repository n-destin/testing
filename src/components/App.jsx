import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import '../../src/style.scss'
import Fallback from './Fallback';
import Posts from './posts';
import Newpost from './Newpost';
import PostComponent from './PostComponent'
import Login from './Login';
import RequireAuth from './authorization';

function App () {
    return(
        <BrowserRouter>
            <div>
                <Navigation/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/posts' element={<RequireAuth>< Posts/></RequireAuth>} />
                    <Route path='/Newpost' element={<RequireAuth>< Newpost/></RequireAuth>} />
                    <Route path='*' element ={<Fallback />}/>
                    <Route path="/posts/:id" element={<RequireAuth><PostComponent/></RequireAuth>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;