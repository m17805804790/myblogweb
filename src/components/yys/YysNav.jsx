import React, { Component } from 'react'
require('./YysNav.css')
class YysNav extends Component{
    render(){
        
        return(
            <div className="licontainer">
                <ul>
                    <li className="allccreenli"onClick={()=>this.props.history.push('/yyslist')}><p>点击就送</p></li>
                    <li className="allccreenli"onClick={()=>this.props.history.push('/yyscx')}><p>手动挡</p></li>
                </ul>
                
            </div>
        )
    }
}
export default YysNav;
