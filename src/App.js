import logo from './logo.svg';
import './App.css';
import SayHi from './SayHi'
import TaskList from './Task-list-page/TaskList'
import Navbar from'./Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Switch>
          <Route path="/Home.">
            <SayHi greeting ={"Welcome to React Workshop"}/>
          </Route>
          <Route path="/Tasks.">
            <TaskList />
           </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
