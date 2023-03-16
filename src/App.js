import { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

import TodoItems from './components/TodoItems/Todoitems';
import AddItem from './components/AddItem/Additems';

class App extends Component{

    state = {
      items: [
                {id:1, name : 'mohamed' , age :22},
                {id:2, name : 'abdelrahman' , age :14},
                {id:3, name : 'ismaile' , age :28}
              ]
            }

            deleteItem = (id) => {
              let items = this.state.items;
              let i = items.findIndex(item => item.id === id)
              items.splice(i ,1)
              this.setState({items}) 

            }

  render(){
    return(
        <div className="App">
          Todo App
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem />
        </div>
  )};
}
export default App;
