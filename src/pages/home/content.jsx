import React from 'react';
import { Row, Col, Button, Image } from 'antd';
import { CloseOutlined, LinkedinOutlined, InstagramOutlined, FacebookOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import './index.css'
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

class Content extends React.Component {
    constructor(props){
        super(props)
    }

    getTitle = (title) => {
        if(!title || !Array.isArray(title) || !title.length){
            return <div></div>;
        }
        let UI = [];
        for(let index in title){
            UI.push(
                <div>{title[index]}</div>
            )
        }
        return UI;
    }

    getContent = (content) => {
        return <div>{content}</div>
    }

    getAction = (actions) => {
        if(!actions || !Array.isArray(actions) || !actions.length){
            return <div></div>;
        }
        let UI = [];
        UI.push(
            <Button className="action"><text className='action_text'>{'Hire Me'}</text></Button>
        )
        UI.push(
            <Button className="action" onClick={() => {}}><text className='action_text'>{'Download CV'}</text></Button>
        )
        return UI;
    }

    getCVModal = () => {
        return (
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title text-primary">My Resume</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    </div>
                    <div class="modal-body">
                        <figure>         
                            <iframe src="img/MyResume/AakashKumar.pdf" style="width: 100%;height: 100vh; border: none;"></iframe>
                        </figure>
                    
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="button primary-button" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }

    getRole = (Role) => {
        return (
            <Row gutter={[0, 0]}>
                <Col span={6} className="role_icon">
                    {/* <CloseOutlined twoToneColor="#f54c18" /> */}
                    <img
                        width={50}
                        src={require("../../assests/images/role_icon.png")}
                    />
                </Col>
                <Col span={18}>{Role}</Col>
            </Row>
        )
    }

    getMediaIcon = (media) => {
        media = media && media.toLowerCase();
        switch(media) {
            case "linkedin" : return <a className='media_icon_link' href=''><LinkedinOutlined className='icon_style'/></a>;
            case "instagram" : return <a className='media_icon_link' href=''><InstagramOutlined className='icon_style' /></a>;
            case "facebook": return <a className='media_icon_link' href=''><FacebookOutlined className='icon_style' /></a>;
            case "whatsapp": return <a className='media_icon_link' href=''><WhatsAppOutlined className='icon_style' /></a>;
            case "gmail": return <a className='media_icon_link' href=''><MailOutlined className='icon_style' /></a>;
            default:
                return <></>;
        }
    }

    getMedias = (medias) => {
        if(!medias || !Array.isArray(medias) || !medias.length){
            return <div></div>;
        }
        let UI = [];
        for(let index in medias){
            UI.push(
                <div className='media_icon'>{this.getMediaIcon(medias[index]["Title"])}</div>
            )
        }
        return UI;
    }

    renderContent = () => {
        const { response } = this.props.state;
        return (
            <div className='left_panel'> 
                <div>
                    <div  className='title'>{this.getTitle( response && response.Title)}</div>
                    <div className='content_text'>{this.getContent(response && response.Content)}</div>
                    <div className='actions'>{this.getAction(response && response.Actions)}</div>
                    <div  className='role_text'>{this.getRole(response && response.Role)}</div>
                </div>
                <div>
                    <div  className='quote'>{response && response.Quote}</div>
                </div>
            </div>
        )
    }

    renderProfileImage = () => {
        const { response } = this.props.state;
        return (
                <Image
                    preview={false}
                    width="100%"
                    height="100%"
                    src={response && response.Profile && response.Profile.length ? response.Profile : require("../../assests/images/profile.png")}
                />
            )
    }

    renderMediaIcon = () => {
        const { response } = this.props.state;
        return (
            <div  className='media_icons'>{this.getMedias(response && response.Medias)}</div>
        )
    }

    render(){
        return (
            <>
              {/* Web Content */}
              <div className='content_container_web'>
                <div className='content_web'>{this.renderContent()}</div>
                <div className='profile_image_web'>{this.renderProfileImage()}</div>
                <div className='media_icons_set'>{this.renderMediaIcon()}</div>
              </div>

               {/* Mobile Content */}
               <div className='content_container_mobile'>
                    <div className='profile_image_mobile'>{this.renderProfileImage()}</div>
                    <div className='content_mobile'>{this.renderContent()}</div>
                    <div className='media_icons_set'>{this.renderMediaIcon()}</div>
              </div>
            </>
        )
    }
} 

export default Content;