import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'
import About from './About';
import Home from './Home';
import Test from './Test';
import '../../src/style.scss'
import Fallback from './Fallback';

function App () {
    return(
        <BrowserRouter>
            <div>
                <Navigation/>
                <Routes>
                    <Route path='/About' element={< About/>} />
                    <Route path='/' element={< Home/>} />
                    <Route path="/test/:id" element={<Test/>} />
                    <Route path='*' element ={<Fallback />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;