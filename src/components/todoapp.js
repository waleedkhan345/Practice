import React, { Component } from 'react'
import Input from './input';
import Display from './display';
import Helpers from '../services/service'

class Todo extends Component{
    state={
        todo:Helpers.Todo,
    }

    delete = (id) => {
       Helpers.DeleteTodo(id);
       this.setState({todo:Helpers.Todo})
    }

    update = (id) => {
        Helpers.Update(id)
    } 

    add = (task) =>{
        Helpers.Addtodo({id:this.state.todo.length,Task:task})
        this.setState({todo:Helpers.Todo})
    }

    render(){
        return(
            <div className="Todo">
                <Input add={this.add} view={this.state.update} />
                <Display view={this.state.todo} delete={this.delete} update={this.update} />
            </div>
        )
    }
}

export default Todo