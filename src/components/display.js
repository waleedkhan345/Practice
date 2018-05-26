import React, { Component } from 'react'


class Display extends Component{
    remove = (e) => {
        this.props.delete(e.target.id)
    }

    update = (e) => {
        this.props.update(e.target.dataset.id)
    }

    render(){
        return(
            <div className="Display">
                <div className="container jumbotron pt-0">
                    {
                        this.props.view.map((k,l)=>{
                            return(
                                <div className="row justify-content-center mb-1">
                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <h4 className="text-center"><span>{k.id}</span> <span>{k.Task}</span></h4>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-2">
                                        <a data-id={k.id} onClick={this.update} className="btn btn-primary mr-1">EDIT</a>
                                        <a id={k.id} onClick={this.remove} className="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Display