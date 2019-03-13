import React, { Component } from 'react'

class Nav extends Component{
    constructor(props){
        super()
        this.state = {
            length:0
        }
    }
    render(){
        return (
            <ul>
                this.props.navList.map((item) =>return <li>{ item }</li>
                )
            </ul>
            
        )
    }
}
export default Nav