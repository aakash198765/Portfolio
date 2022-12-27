import './index.css'
import React from 'react';
import { Button, Form, Input, InputNumber, Select, Row, Col, Image, Spin  } from 'antd';
import { DownloadOutlined, SendOutlined, PhoneOutlined,  UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { FaMapMarkerAlt, FaMailBulk, FaPhoneSquareAlt } from "react-icons/fa"
import Lottie from "lottie-react";
import Sending from './send.json';
import Sent from './sent.json';
import Failed from './failed.json';
const { TextArea } = Input;

class Content extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render = () => {
        return (
            <div className='contact-content'>
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
            <div className='contact-content-header'>  
                <div className="contact-header-text">C o n t a c t <span style={{marginLeft: '1rem', marginRight: '.5rem'}}>M e</span></div>
                <div className="contact-header-subText">Get In Touch!</div>
            </div>
        )
    }

    renderBody = () => {
        return (
            <div className='contact-content-body'>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={14} xxl={14}>
                        <div className='body-form'>{this.renderForm()}</div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={10}>
                        <div className='body-address'>{this.renderAddress()}</div>
                    </Col>
                </Row>
            </div>
        )
    }

    renderForm = () => {
        const { state } = this.props;
        const { form, submitCounter, sendingMessage, sentMessageSuccessfully, failedToSendMessage} = state;
        
        if(sendingMessage) {
            return this.renderLoader();
        }

        if(sentMessageSuccessfully) {
            return this.renderSuccessfull()
        }

        if(failedToSendMessage) {
            return this.renderFailure()
        }

        return (
          <div className='contactForm contactFormAlignment'>
            <span className='inputStyle-inline-container'>
                <Input 
                    size="large" 
                    className='inputStyle-inline-1'
                    id="firstName"
                    placeholder="First Name"
                    defaultValue={form.firstName}
                    onChange={(e) => this.props.updateForm('firstName', e.target.value)}
                    suffix={submitCounter && !form.firstName ? <QuestionCircleOutlined style={{color: 'red'}} /> : <></>}
                />
                <Input 
                    size="large" 
                    className='inputStyle-inline-2'
                    id="lastName"
                    placeholder="Last Name"
                    defaultValue={form.lastName}
                    onChange={(e) => this.props.updateForm('lastName', e.target.value)}
                    suffix={submitCounter && !form.lastName ? <QuestionCircleOutlined style={{color: 'red'}} /> : <></>}
                />
            </span>
            <div className='horizontal-gutter' />
            <Input 
                size="large" 
                className='inputStyle'
                id="emailID"
                prefix={<UserOutlined style={{marginRight: '.3rem'}} />}
                suffix={submitCounter && !form.emailID ? <QuestionCircleOutlined style={{color: 'red'}} /> : <></>}
                placeholder="What's your email?"
                defaultValue={form.emailID}
                onChange={(e) => this.props.updateForm('emailID', e.target.value)}
            />
            <div className='horizontal-gutter' />
            <Input 
                size="large" 
                className='inputStyle'
                id="phoneNumber"
                prefix={<PhoneOutlined style={{marginRight: '.3rem'}} rotate={90} />}
                suffix={submitCounter && !form.phoneNumber ? <QuestionCircleOutlined style={{color: 'red'}} /> : <></>}
                placeholder="What's your Phone Number"
                defaultValue={form.phoneNumber}
                onChange={(e) => this.props.updateForm('phoneNumber', e.target.value)}
            />
            <div className='horizontal-gutter' />
             <TextArea
                id="message"
                className={submitCounter && !form.message ? 'textAreaStyle textAreaStyleError' : 'textAreaStyle'}
                placeholder="Your questions..."
                defaultValue={form.message}
                onChange={(e) => this.props.updateForm('message', e.target.value)}
                maxLength={200}
                autoSize={{
                    minRows: 3,
                    maxRows: 6,
                }}
            />
            <div className='horizontal-gutter' />
            <Button
                id="sendMessage" 
                className='sendMessage'
                type="primary" 
                // shape="round" 
                size={'large'}
                onClick={(e) => this.props.sendMessage(e)}
            >
                SEND MESSAGE
            </Button>
          </div>
        )
    }

    renderAddress = () => {
        const { address, email, phone, feedback } = this.props.state;
        return (
                <div className='address-container addressContainerAlignment'> 
                    <span className='address-header'>Contact Details</span>
                    <span className='address'> <span className='address-icon-container'><FaMapMarkerAlt className='address-icon' /></span> {address} </span>
                    <span className='address'> <span className='address-icon-container'><FaMailBulk className='address-icon' /></span> {email} </span>
                    <span className='address'> <span className='address-icon-container'><FaPhoneSquareAlt className='address-icon' /></span> {phone} </span>

                    <span className='address-header'>Feedback</span>
                    <span className='address'> {feedback} </span>
                </div>
        )
    }

    renderLoader = () => {
        return (
            <div className='loader'>
                <Lottie className='loader-anime' animationData={Sending} loop={true} />
                <span className='loader-message'>Sending Message . . .</span>
            </div>
        )
    }

    renderSuccessfull = () => {
        return (
            <div className='loader'>
                <Lottie className='loader-anime' animationData={Sent} loop={true} />
                <span className='loader-message'>
                    Successfully Sent Message. 
                    <a 
                        href='' 
                        className='send-new-link' 
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.sendNewMessage();
                        }}
                    >
                        Send New Message
                    </a>
                </span>
            </div>
        )
    }

    renderFailure = () => {
        return (
            <div className='loader'>
                <Lottie className='loader-anime' animationData={Failed} loop={true} />
                <span className='loader-message'>
                    Failed to Send Message. 
                    <a 
                        href='' 
                        className='retry-link' 
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.retry();
                        }}
                    >
                        Retry
                    </a>
                </span>
            </div>
        )
    }
}

export default Content;