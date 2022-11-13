import React from 'react';
import Content from './content';
import NavBar from '../../components/navbar';
import './index.css';
import '../global.css';
import response from "./response.json";

class Work extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: ""
        }
    }

    componentDidMount() {
        const location = window.location;
        this.setState({
            active: `${location.pathname}${location.search || "/personal"}`,
            response: response,
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
                <div className='page_content'><Content callback={this.callback} state={this.state} /></div>
            </div>
        )
    }
}

export default Work;