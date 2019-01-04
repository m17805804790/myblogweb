import React, { Component,Fragment } from 'react';
import { Menu } from 'antd';
import {connect} from 'react-redux';
import {logout} from '../actions/LoginActions';
import {Link} from 'react-router-dom';
require('./Nav.css')

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component{
    
   
    logout(e) {
        e.preventDefault();
        this.props.logout();
      }
    
  
 //至68为根据登录情况控制nav显示的     
     comfirm(isAuthenticated,permission){                                        
        const admin = (
            <Menu
                mode="horizontal"
            >
            <Menu.Item key="mainpage">
                <Link to="/">永老无别离</Link>
            </Menu.Item>
            <Menu.Item key="articlelist">
                <Link to="/articlelist">我的日志</Link>
            </Menu.Item>
            <Menu.Item key="writearticle">
                <Link to="/writearticle">写日志</Link>
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper">留言</span>}>
                <MenuItemGroup>
                    <Menu.Item key="leavemessage">
                        <Link to="/messagelist/leavemessage">我想留言</Link>
                    </Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu title={<span className="submenu-title-wrapper">一点微小的贡献</span>}>
                <MenuItemGroup>    
                    <Menu.Item key="fgoap">
                        <Link to="/fgoap">fgo真好玩</Link>
                    </Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup>
                    <Menu.Item key="yys">
                        <Link to="/yysnav">阴阳师</Link>
                    </Menu.Item>
                    
                </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="logout">
                <Link to="javascript：void" onClick={ this.logout.bind(this) }>登出</Link>          
            </Menu.Item>   
            </Menu>      
          );
          const guest = (
            <Menu
                mode="horizontal"
            >
            <Menu.Item key="mainpage">
                <Link to="/">永老无别离</Link>
            </Menu.Item>
            <Menu.Item key="articlelist">
                <Link to="/articlelist">我的日志</Link>
            </Menu.Item>
            <Menu.Item key="messagelist">
                <Link to="/messagelist">留言</Link>
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper">一点微小的贡献</span>}>
            <MenuItemGroup title="Fgo">
                <Menu.Item key="fgoap">
                    <Link to="/fgoap">fgo真好玩</Link>
                </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="阴阳师">
                <Menu.Item key="yys">
                    <Link to="/yysnav">阴阳师</Link>
                </Menu.Item>
                
            </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="logout">
                <Link to="javascript：void" onClick={ this.logout.bind(this) }>登出</Link>          
            </Menu.Item>   
            </Menu>      
          );    
        const nologin = (
            <Menu
                mode="horizontal"
            >
            <Menu.Item key="mainpage">
                <Link to="/">永老无别离</Link>
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper">一点微小的贡献</span>}>
            <MenuItemGroup title="Fgo">
                <Menu.Item key="fgoap">
                    <Link to="/fgoap">fgo真好玩</Link>
                </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="阴阳师">
                <Menu.Item key="yys">
                    <Link to="/yysnav">阴阳师</Link>
                </Menu.Item>
                
            </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="login">
                <Link to="/login">登录</Link>          
            </Menu.Item>   
            </Menu>      
        ) 
        
        if(isAuthenticated===true){
            if(permission==='admin'){
                return admin
            }else{
                return guest
            }
        }else{
            return nologin
        }
        
    } 






    render(){
        const {isAuthenticated,permission} =this.props.login;
        return(
            <Fragment>
                {this.comfirm(isAuthenticated,permission)}
            </Fragment>
        )
    }
}




const mapStateToProps = (state) =>{
    return {
        login: state.login
      };
}
export default connect(mapStateToProps,{logout})(Nav);
