import React from 'react';
import NavBar from '../../components/navbar';
import Content from './content';

class Home extends React.Component {
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

export default Home;