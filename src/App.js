import { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

import TodoItems from './components/TodoItems/Todoitems';
import AddItem from './components/AddItem/Additems';

class App extends Component{

    state = {
      items: [
                {id:1, name : 'defualt' , age :0},
                {id:1, name : 'defualt' , age :0}
           
              ]
            }

            deleteItem = (id) => {
              let items = this.state.items;
              let i = items.findIndex(item => item.id === id)
              items.splice(i ,1)
              this.setState({items}) 

            }

        addItem  = (item) => {
            item.id = Math.random();
              let items = this.state.items;
              items.push(item);
              this.setState({items})
        }

  render(){
    return(
        <div className="App container">
          <h1 className='text-center'>Todo App</h1>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          <AddItem addItem={this.addItem}/>
        </div>
  )};
}
export default App;
