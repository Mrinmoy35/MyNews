import './App.css';


import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=6  ;
  const apiKey = `d0ab671fcb7546139424df0838d1c5e1`
  const [progress, setProgress] = useState(0)
   
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} 
          />
          <Routes>
            <Route exact path='/' element={< News setProgress={setProgress} apiKey={apiKey} Key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route exact path='/business' element={< News setProgress={setProgress} apiKey={apiKey} Key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={< News setProgress={setProgress} apiKey={apiKey} Key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={< News setProgress={setProgress} apiKey={apiKey} Key='health'pageSize={pageSize} country='in' category='health' />}></Route>
            <Route exact path='/science' element={< News setProgress={setProgress} apiKey={apiKey} Key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={< News setProgress={setProgress} apiKey={apiKey} Key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={< News setProgress={setProgress} apiKey={apiKey} Key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
}
export default App;
 