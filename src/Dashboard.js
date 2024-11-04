import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    TableOutlined, FolderAddOutlined, PlusSquareOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import {Button, Layout, Menu, Row, Col, theme} from 'antd';

const { Header, Sider, Content, Footer } = Layout;

const Dashboard = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <h3 className="montserrat-bold">{collapsed ? 'MR' : 'Master React'}</h3>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={[
                        { key: '/', icon: <UserOutlined />, label: <Link to="/">Home</Link> },
                        { key: '/tables', icon: <TableOutlined />, label: <Link to="/tables">Tables</Link> },
                        { key: '/forms', icon: <FolderAddOutlined />, label: <Link to="/forms">Forms</Link> },
                        { key: '/todolist', icon: <PlusSquareOutlined />, label: <Link to="/todolist">ToDoList</Link> },
                        { key: '/api', icon: <UnorderedListOutlined />, label: <Link to="/api">API</Link> },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        textAlign: 'left'
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content>
                    {props.children}
                </Content>
                <Footer>
                    <Row justify="center">
                        <Col span={24}>
                            Contact: <a href="mailto:email@example.com">email@example.com</a> | LinkedIn: <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">@example</a>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
