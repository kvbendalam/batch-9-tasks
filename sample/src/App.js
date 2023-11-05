import './App.css';
// import Listrendering from './Listrendering';
// import ConditionalRendering from './ConditionalRendering';
// import Login from './Login'
// import Lifecyclce from './Lifecyclce';
// import Counter from "./Counter"
// import Counterf from './Counterf';
// import Mobile from './Mobile'
// import Mobilef from './Mobilef';
// import Person from './Person'
// import ComponentA from './ComponentA';
import Employee from './Employee'
import Login from './Login'
import Registration from './Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counterf from './Counterf';
import DataFetching from './DataFetching';
import DataFetchinginFun from './DataFetchinginFun'
import AxiosinClass from './AxiosinClass';
import AxiosinFun from './AxiosinFun';
import Dog from './Dog'
import Todo from './Todo'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Counterf />}></Route>
          <Route exact path='/todo' element={<Todo />}></Route>
          <Route exact path='/dog' element={< Dog />}></Route>
          <Route exact path="/axiosinc" element={<AxiosinClass />}></Route>
          <Route exact path="/axiosinfun" element={<AxiosinFun />}></Route>
          <Route exact path='/datainc' element={< DataFetching />}></Route>
          <Route exact path='/datainf' element={< DataFetchinginFun />}></Route>
          <Route exact path='/Emp/:id' element={< Employee />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
