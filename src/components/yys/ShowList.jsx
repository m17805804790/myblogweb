import React, { Component } from 'react';
import { Modal } from 'antd';
import a from './info';
require('./ShowList.css')

export default class ShowList extends Component {

    findplace() {

        for (let i = 0; i < a.length; i++) {
            if (a[i].name === this.props.nowstate.shname) {
                return a[i].place.map((place, i) => <li key={i}>{place}</li>)
            }
        }

    }
    onOk() {

    }
    render() {
        return (

            <Modal
                className="yysdialog"
                title="式神信息"

                visible={this.props.nowstate.YYSINFOVisible}
                onCancel={() => this.props.onClicked({ YYSINFOVisible: false })}
                lockScroll={false}
                footer={null}
            >

                <div>
                    <ul>
                        {this.findplace()}
                    </ul>
                </div>

            </Modal>

        )
    }



}