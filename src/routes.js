import React from 'react';
import {Route} from 'react-router-dom';
import SignupPage from './components/Signup/SignupPage';
import YysNav from './components/yys/YysNav';
import Yyscx from './components/yys/Yyscx';
import YysList from './components/yys/YysList';
import Fgohd from './components/fgo/Fgohd';
import MainPage from './components/mainpage/MainPage';
import Nav from './components/Nav';
import SigninPage from './components/Signin/SigninPage';

export default (
    <div className="">
        <Route path="/" component={Nav}></Route>
        <Route exact path="/"  component={MainPage}/>
        
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/yysnav" component={YysNav}></Route>
        <Route path="/yyscx" component={Yyscx}></Route>
        <Route path="/yyslist" component={YysList}></Route>
        <Route path="/fgohd" component={Fgohd}></Route>
        <Route path="/signin" component={SigninPage}></Route>
    </div>
)