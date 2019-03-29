import React, { Component } from 'react'

// 这个页面主要尝试  列表

class Nav extends Component{
    constructor(props){
        super()
        this.state = {
            activeIndex:0
        }
    }
    componentWillMount(){
        this.props.navList.forEach((element,index) => {
            if(element.active){
                this.setState({
                    activeIndex: index
                })
            }
        });
    }
    changeNav = index => {
        this.setState({
            activeIndex: index
        })
    }
    close = ()=>{
        
    }
    render(){
        const { activeIndex } = this.state;
        
        return (
            <ul>
                {
                    this.props.navList.map((item,index) => {
                        return  (
                            <li className={activeIndex === index?'nav-item active':'nav-item' } 
                                key={item.key} 
                                onClick={()=>this.changeNav(this,index)}     // 传递参数
                                onClose={this.close}               //  不传递参数
                                >
                                { item.name }
                            </li>
                        )
                    })    
                }
            </ul>
            
        )
    }
}
export default Nav;