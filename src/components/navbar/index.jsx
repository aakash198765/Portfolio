import React from 'react';
import Content from './content';
import "antd/dist/antd.css";
import "./index.css";

const breadcrumbItems = [
    {
        breadcrumbName: "Home",
        breadcrumbIcon: "",
        path: "/home",
        children: [],
    },
    {
      breadcrumbName: "About",
      breadcrumbIcon: "",
      path: "/about",
      children: [
           {
              path: '/about?mode=education',
              breadcrumbName: 'Education',
            },
            {
              path: '/about?mode=experience',
              breadcrumbName: 'Experience',
            }
      ],
    },
    {
        breadcrumbName: "Certification",
        breadcrumbIcon: "",
        path: "/certification",
        children: [],
    },
    {
        breadcrumbName: "Services",
        breadcrumbIcon: "",
        path: "/service",
        children: [],
    },
    {
      breadcrumbName: "Contact",
      breadcrumbIcon: "",
      path: "/contact",
      children: [],
    }
];

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openDrawer: false,
            collapsed: false,
            breadcrumbItems: [],
        }
    }

    componentDidMount () {
        this.setState({
            breadcrumbItems: breadcrumbItems
        })
    }

    updateState = (id, value) => {
      this.setState({
        [id]: value
      })
    }

    render(){
        const { breadcrumbItems } = this.state;
        return (
            <Content 
              breadcrumbItems={breadcrumbItems} 
              state={this.state}
              updateState={this.updateState}
              active={this.props.active}
              pathname={this.props.pathname}
              callback={this.props.callback}
            />
        )
    }
}

export default NavBar;