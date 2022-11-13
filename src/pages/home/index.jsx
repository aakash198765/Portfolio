import React from 'react';
import NavBar from '../../components/navbar';
import Content from './content';
import './index.css'
import '../global.css';
import response from './response';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: "",
            response: response,
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
                <div className='page_content'><Content state={this.state} /></div>
            </div>
        )
    }
}

export default Home;