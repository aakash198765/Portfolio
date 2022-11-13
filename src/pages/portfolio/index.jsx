import React from 'react';
import Content from './content';
import NavBar from '../../components/navbar';
import './index.css';
import '../global.css';

class Portfolio extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: ""
        }
    }

    componentDidMount() {
        const location = window.location;
        this.setState({
            active: `${location.pathname}${location.search}`,
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
                <div className='page_content'><Content /></div>
            </div>
        )
    }
}

export default Portfolio;