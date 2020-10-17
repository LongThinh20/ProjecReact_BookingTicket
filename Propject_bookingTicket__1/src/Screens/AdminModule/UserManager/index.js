import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import NavbarAdmin from '../../../Components/NavbarAdmin'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class UserManager extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div >
                ádsdfds
            </div>
        );
    }
}

