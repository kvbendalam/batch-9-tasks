import './App.css';
// import Listrendering from './Listrendering';
// import ConditionalRendering from './ConditionalRendering';
// import Login from './Login'
// import Lifecyclce from './Lifecyclce';
// import Counter from "./Counter"
// import Counterf from './Counterf';
// import Mobile from './Mobile'
// import Mobilef from './Mobilef';
import Person from './Person'
// import ComponentA from './ComponentA';
import Employee from './Employee'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Person />}></Route>
          <Route exact path='/Emp' element={< Employee />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
