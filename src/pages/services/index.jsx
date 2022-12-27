import React from 'react';
import ServiceContent from './content';
import NavBar from '../../components/navbar';
import './index.css';
import '../global.css';
import response from  "./response.json"

class Service extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pathname: "",
            active: "",
            services: [],
            projects: [],
            clients: [],
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
            services: response && response.Services,
            projects: response && response.Projects,
            clients: response && response.Clients,
        })
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
                <div className='page_content'><ServiceContent state={this.state} /></div>
            </div>
        )
    }
}

export default Service;