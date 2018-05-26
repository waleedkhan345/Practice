import React, { Component } from 'react'
import Helpers from '../services/service';

class Input extends Component{
    state={
        value:''
    }

    componentDidMount(){
        this.setState({value:Helpers.update})
    }

    add = () =>{
        this.props.add(this.state.value);
        this.setState({value:''})
    }

    getValue = (e) => {
        this.setState({value:e.target.value})
    }

    
    render(){
        return(
            <div className="input-t mt-5">
                <div className="container jumbotron mb-0">
                    <h1 className="text-center mb-4">TODO APP</h1>
                    <div className="form-group row justify-content-center">
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <input type="text" value={this.state.value} onChange={this.getValue} className="form-control"/>
                        </div>
                        <div className="col-xl-2 col-md-2 col-lg-2">
                            <a onClick={this.add} className="btn btn-success">Add</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input