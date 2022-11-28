import React from 'react';
import Content from './content';
import NavBar from '../../components/navbar';
import './index.css';
import '../global.css';

class About extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: ""
        }

        this.searchParams = new URLSearchParams(window.location.search)
    }

    componentDidMount() {
        const mode = this.getParams("mode", window.location.search);
        this.setState({
            active: mode,
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

    callback = (id, value) => {
        if(!id || !id.length){
            return ;
        }
        const mode = this.getParams("mode", value);
        this.setState({
          active: mode
        })
      }

    render(){
        const { active } = this.state;
        return (
            <div className='page_layout'>
                <div className='page_navbar'><NavBar active={active} callback={this.callback} /></div>
                <div className='page_content'><Content active={active} /></div>
            </div>
        )
    }
}

export default About;