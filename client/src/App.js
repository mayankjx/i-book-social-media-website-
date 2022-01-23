import { BrowserRouter as Router, Route, Link, Routes, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='/login' element={
            <>
              <Navbar />
              <Login />
            </>
          } >
          </Route>

          <Route exact path='/signup' element={
            <>
              <Navbar />
              <Signup />
            </>
          }>
          </Route>

          <Route exact path='/profile:username' element={
            <>
              <Navbar />
              <Profile />
            </>
          } />
        </Routes>
      </Router>

      {/* <Router>
        <Routes>
          <Route path="/login" element={
            <>
              <Navbar />
              <Login />
            </>
          }>

          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;