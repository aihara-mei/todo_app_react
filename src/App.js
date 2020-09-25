import React from 'react';
import TodoList from './components/todoList'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      mck: [{complete: false, txt: '1'}, {complete: false, txt: '2'}, {complete: false, txt: '3'}, {complete: false, txt: '4'}]
    }
  }

  toggleTodo(id) {
    let mck = this.state.mck.slice()
    mck[id] = {...mck[id], complete: !mck[id]['complete']}
    console.log(mck)
    this.setState({mck: mck})
  }

  addTodo(item) {
    this.setState({
      mck: [...this.state.mck, item]
    })
  }

  render() {
    return (
      <div className="root">
        <h1 className="item">todolist</h1>
        <TodoList todos={this.state.mck} toggle={(id)=>this.toggleTodo(id)} add={(item) => this.addTodo(item)}/>
      </div>
    )
  }
}

export default App;
