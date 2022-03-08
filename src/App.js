import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={ <Navigate to='/home' /> }/>
            <Route path='/home' element={ <Home /> }/>
            <Route path='/student' element={ <Student /> }/>
            <Route path='/contact' element={ <Contact /> }/>
            <Route path='/*' element={ <Navigate to='/home' /> }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
