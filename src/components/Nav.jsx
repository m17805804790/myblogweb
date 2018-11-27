import React, { Component } from 'react';
require('./Nav.css')
class Nav extends Component{
    render(){
        
        return(
            <div className='navbar navbar-expand-md bg-dark navbar-dark' id='navid'>
                <a className="navbar-brand" href="/">永老无别离的个人博客</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-expand-sm">
                        <li className="nav-item">
                            <a className="nav-link" href="#">我的日志</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/leavemessage">留言</a>
                        </li>    
                        <li className="nav-item">
                            <a className="nav-link" href="/signin">登录</a>
                        </li>    
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">注册</a>
                        </li> 
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                微小的贡献
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/fgohd">fgo真好玩</a>
                                <a className="dropdown-item" href="/yysnav">阴阳师</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>  
                    </ul>
                </div>  
            </div>
        )
    }
}
export default Nav;
