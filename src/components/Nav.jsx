import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/SigninActions';
require('./Nav.css')
class Nav extends Component{
    
   
    logout(e) {
        e.preventDefault();
        this.props.logout();
      }
    
  
 //至68为根据登录情况控制nav显示的     
     comfirm(isAuthenticated,user){                                        
        const adminLinks = (
            <Fragment>
            <li className="nav-item">
                <a className="nav-link" href="javascript：void">我的日志</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/leavemessage">留言</a>
            </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript：void" id="navbardrop" data-toggle="dropdown">
                        微小的贡献
                    </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/fgoap">fgo真好玩</a>
                    <a className="dropdown-item" href="/yysnav">阴阳师</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="javascript：void" onClick={ this.logout.bind(this) }>登出</a>
            </li>  
            </Fragment>  
          );
          const guestLinks = (
            <Fragment>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="javascript：void" id="navbardrop" data-toggle="dropdown">
                        微小的贡献
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/fgohd">fgo真好玩</a>
                        <a className="dropdown-item" href="/yysnav">阴阳师</a>
                    </div>
                </li>   
                <li className="nav-item">
                    <a className="nav-link" href="javascript：void" onClick={ this.logout.bind(this) }>登出</a>
                </li>  
            </ul>
            </Fragment>
          );    
        const nologinLinks = (
            <Fragment>
            <li className="nav-item">
            <a className="nav-link" href="/signin">登录</a>
            </li>    
            <li className="nav-item">
                <a className="nav-link" href="/signup">注册</a>
            </li> 
            </Fragment>
        ) 
        
        if(isAuthenticated===true&&user.username==='root'){
            
            return adminLinks
        }
        if(isAuthenticated===true&&user.username==='guest'){
            return guestLinks
        }else{
            
            return nologinLinks
        }
        
    } 






    render(){
        const {isAuthenticated,user} =this.props.signin;
        return(
            <div className='navbar navbar-expand-md navbar-dark navid bg-dark '  >
                <a className="navbar-brand" href="/">永老无别离的个人博客</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-expand-sm">
                        
                   {this.comfirm(isAuthenticated,user)}
                       
                    </ul>
                </div>  
            </div>
        )
    }
}




const mapStateToProps = (state) =>{
    console.log(state)
    return {
        signin: state.signin
      };
}
export default connect(mapStateToProps,{logout})(Nav);
