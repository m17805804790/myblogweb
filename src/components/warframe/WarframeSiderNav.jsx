import React from 'react'
import { Menu, Icon, Tooltip, Layout } from 'antd';
const { Sider } = Layout;
import("./WarframeSiderNav.less");

const WarframeSiderNav = (props) => {
    return (
        <Sider  width={70} style={{ background: '#fff' }}>
            <Menu
                style={{ borderRight: "1px solid grey", width: "70px", minHeight: "890px" }}
                mode="inline"
            >
                <Menu.Item key="2"><Tooltip title="实时信息" placement="right"><Icon type="bars" /></Tooltip></Menu.Item>

                <Menu.Item key="1"><Tooltip title="组队" placement="right"><Icon type="team" /></Tooltip></Menu.Item>

                <Menu.Item key="3"><Tooltip title="投诉" placement="right"><Icon type="frown" /></Tooltip></Menu.Item>

                <Menu.Item key="4" onClick={props.togglechange}><Tooltip title="收起" placement="right"><Icon type="caret-left" /></Tooltip></Menu.Item>

            </Menu>
        </Sider>


    )
}
export default WarframeSiderNav;