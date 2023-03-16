import { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

import TodoItems from './components/TodoItems/Todoitems';
class App extends Component{

    state = {
      items: [
                {id:1, name : 'mohamed' , age :22},
                {id:2, name : 'abdelrahman' , age :14},
                {id:3, name : 'ismaile' , age :28}
              ]
            }

  render(){
    return(
        <div className="App">
          Todo App
        </div>
  )};
}
export default App;
