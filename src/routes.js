import React from 'react';
import {Route} from 'react-router-dom';
import SignupPage from './components/Signup/SignupPage';
import YysNav from './components/yys/YysNav';
import YysList from './components/yys/YysList';
import MainPage from './components/mainpage/MainPage';
import Nav from './components/Nav';
import LoginPage from './components/Login/LoginPage';
import Myself from './components/mainpage/Myself';
import Message from './components/LeaveMessage/Message';
import Fgoap from './components/fgo/Fgoap';
import qiYong from './components/qiyong';
import LeaveMessage from './components/LeaveMessage/LeaveMessage';
import Article from './components/myblog/Article';
import ArticleList from './components/myblog/ArticleList';
import WriteArticle from './components/myblog/WriteArticle';
export default (
    <div>
        <Route path="/" component={Nav}></Route>
        <Route exact path="/"  component={MainPage}/>
        <Route path="/leavemessage" component={Message}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/yysnav" component={YysNav}></Route>
        <Route path="/wrongpage" component={qiYong}></Route>
        <Route path="/yyslist" component={YysList}></Route>
        <Route path="/fgoap" component={Fgoap}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/aboutme" component={Myself}></Route>
        <Route path="/try" component={LeaveMessage}></Route>
        <Route path="/article/:articlename" component={Article}></Route>
        <Route path="/articlelist" component={ArticleList}></Route>
        <Route path="/writearticle" component={WriteArticle}></Route>
    </div>
)