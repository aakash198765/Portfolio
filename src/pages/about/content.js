import React from 'react';
import { Card } from 'antd';
import Flow from '../../components/ReactFlow';

class Content extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    getContent = () => {
        return (
            <Flow  />
        )

    }

    render(){
        return (
            <div className='about_content_container'>
                <div>{this.getContent()}</div>
            </div>
        )
    }
}

export default Content;