import React, { Component } from 'react';
require('./Nav.css')
class Nav extends Component{
    render(){
        
        return(
            <div className='navbar navbar-expand-md bg-dark navbar-dark' id='navid' style={{paddingLeft:'30%'}}>
                <a className="navbar-brand" href="/">永老无别离的个人博客</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar"style={{marginLeft:'25%'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">我的日志</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">关于我</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">留言</a>
                        </li>    
                        <li className="nav-item">
                            <a className="nav-link" href="/signin">登录</a>
                        </li>    
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">注册</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="/yysnav">一点微小的贡献</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/fgohd">fgo真好玩</a>
                        </li>        
                    </ul>
                </div>  
            </div>
        )
    }
}
export default Nav;
