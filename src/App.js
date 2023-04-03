import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/student' element= {<Student/>} />
        <Route path='/contactus' element= {<Contact/>} />
        <Route path='/*' element= {<Error/>} />
      </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
