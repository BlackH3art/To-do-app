import React, { Component } from 'react';
import TodoBanner from './components/TodoBanner';
import TodoCreator from './components/TodoCreator';
import TodoRow from './components/TodoRow';
import VisibilityControl from './components/VisibilityControl';

class App extends Component {
  state = { 
    userName: "BlackH3art",
    todoItems: [
      {action:"kupić bułki", done: false},
      {action:"zjeść masło", done: false},
      {action:"upolować kojota", done: true},
      {action:"umyć naczynia", done: false}
    ],
    showCompleted: true
   }

  updateNewTextValue = (event) => {
    this.setState({newItemText: event.target.value});
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, {action: task, done: false}],
      });
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  });

  todoTableRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map(item =>
    <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
  )

  render() { 
    return ( 
      <>
        <div>
          <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
          <div className="container-fluid">
            <TodoCreator callback={this.createNewTodo} />
            <table className="table table-striped table-bordered">
              <thead>
                <tr><th>Opis</th><th>Wykonane</th></tr>
                {this.todoTableRows()}
              </thead>
              <tbody> {this.todoTableRows(false)} </tbody>
            </table>
            <div className="bg-secondary text-white text-center p-2">
              <VisibilityControl description="wykonane zadania" isChecked={this.state.showCompleted}
              callback={(checked) => this.setState({showCompleted: checked})} />
            </div>
            {this.state.showCompleted && 
            <table className="table table-stripped table-bordered">
              <thead>
                <tr><th>Opis</th><th>Wykonane</th></tr>
              </thead>
              <tbody> {this.todoTableRows(true)} </tbody>
            </table>
            }
          </div>
        </div>
      </>
     );
  }
}
 
export default App;
