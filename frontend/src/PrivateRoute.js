import React, {Component} from "react"
import {Redirect, Route} from "react-router-dom"

class PrivateRoute extends Component {
    render(){
        if(this.props.currentUser === null){
            return <Redirect to="/login"/>
        }
        return(
            <Route exact={this.props.exact} path={this.props.path} render={this.props.render}/>
        )
    }
}

export default PrivateRoute