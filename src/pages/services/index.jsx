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
            active: "",
            services: [],
            projects: [],
            clients: [],
        }
    }

    componentDidMount() {
        // const location = window.location;
        this.setState({
            //active: `${location.pathname}${location.search}`,
            services: response && response.Services,
            projects: response && response.Projects,
            clients: response && response.Clients,
        })
    }
    
    callback = (id, value) => {
        if(!id || !id.length){
            return ;
        }
        this.setState({
          [id]: value
        })
    }


    render(){
        const { active } = this.state;

        return (
            <div className='page_layout'>
                <div className='page_navbar'><NavBar active={active} callback={this.callback} /></div>
                <div className='page_content'><ServiceContent state={this.state} /></div>
            </div>
        )
    }
}

export default Service;