import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Divider} from 'antd';
import classnames from 'classnames';
import ('./ArticleListBox.less')
class ArticleListBox extends Component{
    constructor(){
        super();
        this.state={
            hoverindex:false
        }
    }
    componentDidMount(){
        this.comfirmclass(this.props.index);
    }
    comfirmclass(index){
       if(index%2===0){
           this.setState({hoverindex:true});
       }
    }
    // asd 这下面的类定义在了通用的index.less中
    render(){
        return(
            <div className={classnames('articlelistbox',{'hoverbackgroundgrey':this.state.hoverindex},{'hoverbackgroundblue':!this.state.hoverindex})}>     
                <Divider/>
                <h3 onClick={()=>this.props.history.push(`/article/${this.props.arr.articlename}`)}>{this.props.arr.articlename}</h3>
                <p>{this.props.arr.simple}</p>
                <Divider />
            </div>
        )
    }
}
export default(withRouter(ArticleListBox));


