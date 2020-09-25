import React from 'react'
import './todoList.css'
import Todo from './todo'

class todoList extends React.Component {
    
    add() {
        this.props.add(this.input.value.trim())
        this.input.value = ''
    }

    onClick(id) {
        this.props.toggle(id)
    }

    render() {
        return (
            <div className="contain"> 
                <input type="text" ref={node => this.input = node}/>
                <button onClick={() => this.add()}>add</button>
                {this.props.todos.map(({complete, txt}, idx) => {
                    return (<Todo key={idx} onClick={() => this.onClick(idx)} complete={complete} txt={txt}/>)
                }
                )
                }
            </div>
        )
    }
}

export default todoList