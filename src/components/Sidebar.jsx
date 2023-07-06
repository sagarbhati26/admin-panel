import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 576);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItem = [
    {
      path: '/',
      name: 'Profile',
      icon: <UserOutlined />,
      isActive: false,
    },
    {
      path: '/report',
      name: 'Report',
      icon: <VideoCameraOutlined />,
      isActive: false,
    },
    {
      path: '/content',
      name: 'Content',
      icon: <UploadOutlined />,
      isActive: false,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
      theme='light'
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={broken => setIsOpen(!broken)}
        width={200}
        collapsedWidth={64}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode={isOpen ? 'inline' : 'vertical'} defaultSelectedKeys={['1']}>
          {menuItem.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-light"
        style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggle}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
