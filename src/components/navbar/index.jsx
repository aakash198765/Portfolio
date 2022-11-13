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
        breadcrumbName: "Works",
        breadcrumbIcon: "",
        path: "/work",
        children: [
            {
              path: '/work?mode=personal',
              breadcrumbName: 'Personal',
            },
            {
              path: '/work?mode=company',
              breadcrumbName: 'Company',
            },
            {
              path: '/work?mode=community',
              breadcrumbName: 'Community',
            },
          ],
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
              // {
              //   path: '/about?mode=achievement',
              //   breadcrumbName: 'Achievement',
              // },
              // {
              //   path: '/about?mode=goal',
              //   breadcrumbName: 'Goals',
              // },
              // {
              //   path: '/about?mode=interest',
              //   breadcrumbName: 'Interest',
              // },
              // {
              //   path: '/about?mode=hobby',
              //   breadcrumbName: 'Hobby',
              // },
        ],
    },
    // {
    //     breadcrumbName: "Portfolio",
    //     breadcrumbIcon: "",
    //     path: "/portfolio",
    //     children: [],
    // },
    {
        breadcrumbName: "Services",
        breadcrumbIcon: "",
        path: "/service",
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
              callback={this.props.callback}
            />
        )
    }
}

export default NavBar;