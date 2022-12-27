import React from 'react';
import { Row, Col, Button, Image, Carousel } from 'antd';
import { CloseOutlined, LinkedinOutlined, InstagramOutlined, FacebookOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import './index.css'
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import Lottie from "lottie-react";
import Hi1 from '../../assests/images/hi1.json';
import Hi2 from '../../assests/images/hi2.json';
import Hi3 from '../../assests/images/hi3.json';
import Hi4 from '../../assests/images/hi4.json';
import Setting from './setting.json';


class Content extends React.Component {
    constructor(props){
        super(props)
    }

   
    render(){
        return (
            <div className='home-content'>
                {this.renderHeader()}
                {this.renderGutter()}
                {this.renderBody()}
            </div>   
        )
    }

    renderGutter = () => {
        return (
            <div className='horizontal-gutter-1' />
        )
    }

    renderHeader = () => {
        return (
            <div className='home-content-header'>  
                <Row className='home-content-header-row'>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12} className="home-content-header-left-container">
                        {this.renderHeaderText()}
                        {this.renderHeaderSubText1()}
                        {this.renderHeaderSubText2()}
                        {this.renderHeaderContent()}
                        {this.renderHeaderButtons()}
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={12} className="home-content-header-right-container">
                        {this.renderImage()}
                    </Col>
                </Row>
            </div>
        )
    }

    renderHeaderText = () => {
        const { title } = this.props.state;

        return (
            <span className='home-content-header-title'>
                <text className='home-hie-text'>{title}</text> 
                <Lottie className='home-hie-anime' animationData={Hi1} loop={true} />
            </span>
        )
    }

    renderHeaderSubText1 = () => {
        const { subTitle1, typedRole } = this.props.state;

        return (
            <span className='home-content-header-subText1'>
                {subTitle1} 
                <text className='role-animation'>{typedRole}</text>
            </span>
        )
    }

    renderHeaderSubText2 = () => {
        const { subTitle2 } = this.props.state;

        return (
            <span className='home-content-header-subText2'>
                {subTitle2}
            </span>
        )
    }

    renderHeaderContent = () => {
        const { content } = this.props.state;

        return (
            <span className='home-content-header-content'>
                {content}
            </span>
        )
    }

    renderHeaderButtons = () => {
        const { button1, button2  } = this.props.state;

        return (
            <span className='buttons-container'>
                <Button className="buttons"><text className='buttons_text'>{button1}</text></Button>
                <Button className="buttons" onClick={() => {}}><text className='buttons_text'>{button2}</text></Button>
            </span>
        );
    }

    renderImage = () => {
        const { images, image } = this.props.state;
        
        return (
            <div className='home-images-container'>
                {
                    !image && !images[0] ? <></> 
                    :
                    <Image
                        className='home-image'
                        preview={false}
                        width="95%"
                        height="95%"
                        src={image || images[0]}
                    />
                }
            </div>
        )
    }

    renderBody = () => {
       const {  } = this.props.state;
        return (
            <div className='home-content-body'>
            </div>
        )
    }

} 

export default Content;

//  src={"https://drive.google.com/uc?export=view&id=14ItQfgJDHX_zUjEFvMB1oNrXgV7aRJFy"}