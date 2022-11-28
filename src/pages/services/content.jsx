import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MailTwoTone,
    DatabaseTwoTone,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  const { Header, Sider, Content } = Layout;

class ServiceContent extends React.Component {
    constructor(props){
        super(props)
    }

    getMenuItems = (response) => {
        if(!response || !response.Services || !Array.isArray(response.Services) || !response.Services.length){
            return [];
        }
        const services = response.Services;
        let items = [];
        for(let index in services){
            items.push(
                {
                    id: index,
                    key: index,
                    icon: "",
                    label: services[index].title,
                }
            )
        }
        return items;
    }

    render(){
        return (
            <div className='service_content_container'>{this.renderMainContent(this.props.state)}</div>
        )
    }

    renderMainContent = (state) => {
        const { collapsed, response, activeService, width } = state;
        return (
            <Layout className='service_content_container'>
                <Sider 
                    trigger={null} 
                    collapsible 
                    collapsed={collapsed} 
                    width={width} 
                    theme="light"
                >
                    <Menu
                        theme="light"
                        mode="inline"
                        width={width} 
                        defaultSelectedKeys={['1']}
                        items={this.getMenuItems(response)}
                        onClick={(event) => this.props.callback("activeService", event.key)}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            paddingLeft: 20,
                            fontSize: "1.2rem",
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => {
                                this.props.callback("width", width === 200 ? 10 : 200)
                                this.props.callback("collapsed", !collapsed)
                            },
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.renderMenuItemContent(response, activeService)}
                    </Content>
                </Layout>
            </Layout>
        )
    }

    renderMenuItemContent = (response, activeService) => {
        if(!response || !response.Services || !response.Services[activeService]){
            return <div>No Content</div>;
        }
        const service = response.Services[activeService];
        return (
            <>
                <div 
                    style={{
                        fontSize: "2rem",
                        fontFamily: 'sans-serif',
                    }}
                >
                    {service && service.title}
                </div>
                <div
                     style={{
                        fontSize: "1rem",
                        fontFamily: 'sans-serif',
                        paddingTop: '1rem',
                        paddingBottom: '1rem'
                    }}
                >
                    {service && service.content}
                </div>
            </>
        )
    }
}

export default ServiceContent;