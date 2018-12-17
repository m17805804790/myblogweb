import React from 'react';
import {Route} from 'react-router-dom';
import SignupPage from './components/Signup/SignupPage';
import YysNav from './components/yys/YysNav';
import YysList from './components/yys/YysList';
import MainPage from './components/mainpage/MainPage';
import Nav from './components/Nav';
import SigninPage from './components/Signin/SigninPage';
import Myself from './components/mainpage/Myself';
import Message from './components/LeaveMessage/Message';
import Fgoap from './components/fgo/Fgoap';
import qiYong from './components/qiyong';
export default (
    <div>
        <Route path="/" component={Nav}></Route>
        <Route exact path="/"  component={MainPage}/>
        <Route path="/leavemessage" component={Message}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/yysnav" component={YysNav}></Route>
        <Route path="/yyscx" component={qiYong}></Route>
        <Route path="/yyslist" component={YysList}></Route>
        <Route path="/fgoap" component={Fgoap}></Route>
        <Route path="/signin" component={SigninPage}></Route>
        <Route path="/aboutme" component={Myself}></Route>
        
        
    </div>
)