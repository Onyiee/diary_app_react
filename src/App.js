import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
import NewEntry from './pages/NewEntry'
import Entries from './pages/Entries';
import Success from './pages/Success';


function App() {
  return (
   <>
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} /> */}
        <Route exact path='/newEntry' component={NewEntry} />
        <Route exact path='/entries' component={Entries} />
        <Route exact path ='/success' component={Success} />
      </Switch>
   </>
  );
}

export default App;
