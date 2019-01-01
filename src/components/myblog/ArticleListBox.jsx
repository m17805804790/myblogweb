import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Divider} from 'antd';
import ('./ArticleListBox.less')
class ArticleListBox extends Component{
    render(){
        return(
            <div className="articlelistbox">
                <Divider />
                <h3 onClick={()=>this.props.history.push(`/article/${this.props.arr.articlename}`)}>{this.props.arr.articlename}</h3>
                <p>{this.props.arr.simple}</p>
            </div>
        )
    }
}
export default(withRouter(ArticleListBox));


