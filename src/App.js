import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Class from './pages/Class/Class';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import Students from './pages/Students/Students';
import StudentsDetails from './pages/StudentsDetails/StudentsDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/class">
              <Class></Class>
            </Route>
            <Route path="/students">
              <Students></Students>
            </Route>
            <Route path="/students/:id">
              <StudentsDetails></StudentsDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
