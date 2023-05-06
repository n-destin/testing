import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import '../../src/style.scss'
import Fallback from './Fallback';
import Posts from './posts';
import Newpost from './Newpost';
import PostComponent from './PostComponent'

function App () {
    return(
        <BrowserRouter>
            <div>
                <Navigation/>
                <Routes>
                    <Route path='/posts' element={< Posts/>} />
                    <Route path='/Newpost' element={< Newpost/>} />
                    <Route path='*' element ={<Fallback />}/>
                    <Route path='/posts/:id' element={<PostComponent/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;