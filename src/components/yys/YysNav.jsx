import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class YysNav extends Component{
    render(){
        
        return(
            <div className="licontainer">
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/yyslist">我超级懒</Link></li>
                    <li className="list-group-item"><Link to="/yyscx">我有点懒</Link></li>
                </ul>
                
            </div>
        )
    }
}
export default YysNav;
