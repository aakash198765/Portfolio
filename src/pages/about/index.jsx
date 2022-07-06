import React from 'react';
import Content from './content';
import NavBar from '../../components/navbar';

class About extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <>
                <NavBar />
                <Content />
            </>
        )
    }
}

export default About;