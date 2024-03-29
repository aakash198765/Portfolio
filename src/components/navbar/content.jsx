import React from 'react';
import { Alert, Breadcrumb, Menu, Drawer, Space, Button } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MenuOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MehOutlined } from '@ant-design/icons';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";

class Content extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){

    }

    renderBreadcrumbChildren = (children) => {
        if(!children || !children.length){
            return ;
        }
        let items = [];
        children.map((child, childIndex) => {
            if(child.path && child.breadcrumbName){
                items.push(
                    {
                        key: childIndex,
                        label: (
                            <Link to={child.path}>{child.breadcrumbName}</Link>
                        ),
                      }
                )
            }
        })

        return <Menu items={items} className="custom_breadcrumb_overlay_container" />;
    }


    renderBreadcrumb = (breadcrumbItems) => {
        let navbar = [];
        for(let index in breadcrumbItems) {
            const breadcrumbItem = breadcrumbItems[index];
            let key = breadcrumbItem.path && breadcrumbItem.path.split('/');
            key = key && key[1];
            if(breadcrumbItem && breadcrumbItem.children && Array.isArray(breadcrumbItem.children) && breadcrumbItem.children.length){
                navbar.push(
                    <Breadcrumb.Item className="custom_navbar_item" key={key} overlay={this.renderBreadcrumbChildren(breadcrumbItem.children)}>
                        <Link to={breadcrumbItem.path}><a>{breadcrumbItem.breadcrumbName}</a></Link>
                    </Breadcrumb.Item>
                )
            } else {
                navbar.push(
                    <Breadcrumb.Item className="custom_navbar_item" key={key}>
                        <Link to={breadcrumbItem.path}><a>{breadcrumbItem.breadcrumbName}</a></Link>
                    </Breadcrumb.Item>
                )
            }
        }

        return (
            <div className="custom_navbar_component">
                {/* Brand  */}
                <text className="custom_brand_text">
                    Portfolio
                </text>
                {/* Navbar  */}
                <Breadcrumb className="custom_navbar" separator>
                    {navbar}
                </Breadcrumb>
            </div>
        )
    }

    getItem = (label, key, icon, children, type) => {
        if(children && children.length){
            return { key, icon, children, label:  <Link to={key}><a>{label}</a></Link>, type }
        } else {
            return { key, icon, label:  <Link to={key}><a>{label}</a></Link>, type }
        }
    }

    renderDrawerContent = (breadcrumbItems, collapsed) => {
        let menuItems = [];
        for(let breadcrumbItemIndex in breadcrumbItems) {
            const breadcrumbItem = breadcrumbItems[breadcrumbItemIndex];
            {/* children start */}
            const children = breadcrumbItem && breadcrumbItem.children;
            let childItems = [];
            for(let childIndex in children){
                const childItem = this.getItem(children[childIndex].breadcrumbName, children[childIndex].path, children[childIndex].icon, [], children[childIndex].type);
                childItems.push(childItem);
            }
            {/* children end */}
            const menuItem = this.getItem(breadcrumbItem.breadcrumbName, breadcrumbItem.path, breadcrumbItem.icon, childItems, breadcrumbItem.type);
            menuItems.push(menuItem)
        }

        return (
            <Menu
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['0']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={menuItems}
            />
        )

    }

    renderDrawer = (breadcrumbItems) => {
        const { openDrawer, collapsed  } = this.props.state;
        return (
            <Space>
                 <div className="custom_sidebar_component">
                    {/* Breadcrumb Icon  */}
                    <MenuOutlined 
                        style={{
                            fontSize: '32px', 
                            padding: '1rem',
                            color: '#ffffff'
                        }}
                        onClick={() => this.props.updateState('openDrawer', !openDrawer)}
                    />
                    {/* Navbar  */}
                    <text className="custom_brand_text_2">
                        Portfolio
                    </text>
                </div>
                <Drawer
                    title="Portfolio"
                    placement="left"
                    width={'100%'}
                    closeIcon={false}
                    onClose={()=> {}}
                    visible={openDrawer}
                    extra={
                    <Space>
                        <Button type="primary" style={{backgroundColor: "#343a40", borderColor: "#343a40", borderRadius: "5px"}} onClick={() => this.props.updateState('openDrawer', !openDrawer)}> Close </Button>
                    </Space>
                    }
                >
                    {this.renderDrawerContent(breadcrumbItems, collapsed)}
                </Drawer>
            </Space>
        )

    }

    render(){
        return (
            <>
                <div className='web_breadcrumb'>{this.renderBreadcrumb(this.props.breadcrumbItems)}</div>
                <div className='mobile_drawer'>{this.renderDrawer(this.props.breadcrumbItems)}</div>
            </>
        )
    }
}

export default Content;