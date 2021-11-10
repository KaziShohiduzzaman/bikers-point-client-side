import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AllCollection from './Pages/AllCollection/AllCollection';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allCollection">
              <AllCollection />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/purchase/:Id">
              <Purchase></Purchase>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
