import './style.css';
import React from 'react';
import {Card, Image, Typography } from 'antd';
const { Meta } = Card;
const { Text, Paragraph } = Typography;

class CustomCard2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const {title , content} = this.props;
        
        return (
            <Card className='custom-card-2'>
                <span className='custom-card-2-title'>{title}</span>
                <span className='custom-card-2-content'>{content}</span>
            </Card>
        )
    }
}

export default CustomCard2;