import React from 'react';
import {Route} from 'react-router-dom';
import SignupPage from './components/Signup/SignupPage';
import YysNav from './components/yys/YysNav';
import YysList from './components/yys/YysList';
import MainPage from './components/mainpage/MainPage';
import Nav from './components/Nav';
import LoginPage from './components/Login/LoginPage';
import MessageList from './components/LeaveMessage/MessageList';
import Fgoap from './components/fgo/Fgoap';
import qiYong from './components/qiyong';
import Article from './components/myblog/Article';
import ArticleList from './components/myblog/ArticleList';
import WriteArticle from './components/myblog/WriteArticle';
import EditArticle from './components/myblog/EditArticle';
import IE from './components/IE';
import Resume from './components/mainpage/Resume';
import Warframe from './components/warframe/Warframe';
import Work from './components/work/Work';
export default (
    <div>
        <Route path="/" component={Nav}></Route>
        <Route exact path="/"  component={MainPage}/>
        <Route path="/ie" component={IE}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/wrongpage" component={qiYong}></Route>
        {/*注册登录*/}
        <Route path="/signup/:info" component={SignupPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        {/*注册登录*/}
        
        <Route path="/yysnav" component={YysNav}></Route>
        <Route path="/yyslist" component={YysList}></Route>
        <Route path="/fgoap" component={Fgoap}></Route>
        {/* blog */}
        <Route path="/article/:articlename" component={Article}></Route>
        <Route path="/articlelist" component={ArticleList}></Route>
        <Route path="/writearticle" component={WriteArticle}></Route>
        <Route path="/editarticle/:articlename/:simple" component={EditArticle}></Route>
        {/* blog */}
        {/* message*/}
        <Route path="/messagelist" component={MessageList}></Route>
        {/* message*/}
        {/*warframe*/}
        <Route path="/warframe"component={Warframe}></Route>
        {/*warframe*/}
        {/*work*/}
        <Route path="/work"component={Work}></Route>
        {/*work*/}
    </div>
)