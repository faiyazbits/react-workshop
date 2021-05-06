import logo from './logo.svg';
import './App.css';
import SayHi from './SayHi'
import Members from './members'
import Topics from './topic';
import { ToDoHeading } from './heading';
import { ToDoInput } from './inputList';
import {CounterList} from './counter/CounterList'

function App() {
  return (
    <div className="App">
      {/* <SayHi greeting ="Hai everyone...Welcome to React Workshop!"/>
      <Members/>
      <Topics/> */}
      {/* <ToDoHeading heading = "Todo App"/>
      <ToDoInput/> */}
      <CounterList/>
    </div>
  );
}

export default App;
