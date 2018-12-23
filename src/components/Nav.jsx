import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/SigninActions';
import {Link} from 'react-router-dom';
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
                <Link className="nav-link" to="/articlelist">我的日志</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/leavemessage">留言</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="javascript：void" id="navbardrop" data-toggle="dropdown">
                    微小的贡献
                </Link>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/fgoap">fgo真好玩</Link>
                    <Link className="dropdown-item" to="/yysnav">阴阳师</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="javascript：void" onClick={ this.logout.bind(this) }>登出</Link>
            </li>  
            </Fragment>  
          );
          const guestLinks = (
            <Fragment>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                     <Link className="nav-link dropdown-toggle" to="javascript：void" id="navbardrop" data-toggle="dropdown">
                        微小的贡献
                    </Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/fgohd">fgo真好玩</Link>
                        <Link className="dropdown-item" to="/yysnav">阴阳师</Link>
                    </div>
                </li>   
                <li className="nav-item">
                    <Link className="nav-link" to="javascript：void" onClick={ this.logout.bind(this) }>登出</Link>
                </li>  
            </ul>
            </Fragment>
          );    
        const nologinLinks = (
            <Fragment>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="javascript：void" id="navbardrop" data-toggle="dropdown">
                    微小的贡献
                </Link>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/fgoap">fgo真好玩</Link>
                    <Link className="dropdown-item" to="/yysnav">阴阳师</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signin">登录</Link>
            </li>
                
            {/* <li className="nav-item">
                <Link className="nav-link" href="/signup">注册</Link>
            </li>  */}
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
                <Link className="navbar-brand" to="/">永老无别离的个人博客</Link>
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
    return {
        signin: state.signin
      };
}
export default connect(mapStateToProps,{logout})(Nav);
