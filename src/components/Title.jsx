import React, { Component } from "react";

// 为了测试props.children   可放入空标签

class Title extends Component {
    render() {
        return (
            <>{this.props.children}</>
            
        )
            
    }
}
export default Title;
