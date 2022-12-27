import React from 'react';
import NavBar from '../../components/navbar';
import Content from './content';
import './index.css'
import '../global.css';
import response from './response.json'

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pathname: "",
            active: "",
            title: "",
            subTitle1: "",
            roles: [],
            role: "",
            typedRole: "",
            roleCount: 0,
            subTitle2: "",
            content: "",
            button1: "",
            button2: "",
            medias: [],
            quote: "",
            images: [],
            image: ""
        }
    }

    componentDidMount() {
        this.makeApiCall();
    }

    makeApiCall = () => {
        const active = this.getParams("", window.location.search);
        this.setState({
            active: active,
            pathname: window.location.pathname,
            title: response && response.Title,
            subTitle1: response && response.SubTitle1,
            roles: response && response.roles,
            subTitle2: response && response.SubTitle2,
            content: response && response.Content,
            button1: response && response.Button1,
            button2: response && response.Button2,
            medias: response && response.Medias,
            quote: response && response.Quote,
            images: response && response.images,
            role: response && response.roles && response.roles[0],
        }, () =>  this.setDefaultValues());
    }

    setDefaultValues = () => {

        setInterval(() => {
            const len = response && response.images && response.images.length;
            if(len < 1) {
                return;
            }
            const number = Math.floor((Math.random() * len) + 1);
            this.setState({
                image: response.images[number]
            })
        }, 3000)

        setInterval(() => {
            const { roles } = this.state;
            const len = roles && roles.length;
            if(len < 1) {
                return;
            }
            const number = Math.floor((Math.random() * len) + 1);
            this.setState({
                role: roles[number],
                roleCount: 0,
                typedRole: "",
            }, () => {

            })
        }, 10000)

        setInterval(() => {
            const { roleCount , role} = this.state;
            const len = role && role.length;
            if(len < 1) {
                return;
            }
        
           const subRoleText = role.slice(0, roleCount)
            this.setState({
                typedRole: subRoleText,
                roleCount: roleCount + 1,
            })
        }, 1000)


    }

    callback = (id, value) => {
        if(!id || !id.length){
            return ;
        }
        const active = this.getParams("mode", value);
        this.setState({
          active: active,
        })
    }

    getParams = (param, url) => {
        let params = url ? url.split("?") : "";
        params = params && params[1] ? params[1].split("&") : [];
        let obj = {};
        for(let i in params) {
            let param = params[i].split("=");
            obj[param[0]] = param[1];
        }
        return obj[param] || "";
    }

    render(){
        const { active, pathname } = this.state;
        return (
            <div className='page_layout'>
                <div className='page_navbar'><NavBar active={active} pathname={pathname} callback={this.callback} /></div>
                <div className='page_content'><Content state={this.state} /></div>
            </div>
        )
    }
}

export default Home;