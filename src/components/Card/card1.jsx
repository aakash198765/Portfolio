import './style.css';
import React from 'react';
import {Card, Image } from 'antd';
const { Meta } = Card;

class CustomCard1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { image, title , content} = this.props;
        return (
            <Card className='custom-card'>
                <span className='custom-card-image-container'>
                    <Image
                        alt={title}
                        src={image}
                        preview={false}
                        className='custom-card-image'
                    />
                </span>

                <Meta 
                    className='custom-meta'
                    title={<div className='custom-card-title'>{title}</div>}
                    description={<div className='custom-card-content'>{content}</div>}
                />

                <div className='custom-card-button'>
                    <text className='custom-card-button-title'>Learn More</text>
                </div>
            </Card>
        )
    }
}

export default CustomCard1;