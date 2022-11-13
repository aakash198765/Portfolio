import React from 'react';
import { Card, Row, Col, Tooltip } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

class Content extends React.Component {
    constructor(props){
        super(props)
    }

    getActive = (active) => {
        if(active && active.includes("personal")){
            return "Personal"
        }
        if(active && active.includes("company")){
            return "Company"
        }
        if(active && active.includes("community")){
            return "Community"
        }
    }

    getContent = (state, callback) => {
        let { response, active } = state;
        active = this.getActive(active);
        const projects = active && response && response[active] ? response[active] : [];
        if(!projects || !Array.isArray(projects) || !projects.length){
            return <div>No Content</div>
        }
        let cards = [];
        projects.map((ele, index) => {
            cards.push(
                <Col>
                    <Card
                        title=""
                        bordered={false}
                        className="custom_card"
                        hoverable={true}
                    >
                        <div style={{width: "100%", height: "100%"}}>
                            {
                                ele && ele.mode === "private" ? 
                                <div className='custom_card_icon'><Tooltip title={ele && ele.modeText} placement='left'><EyeInvisibleOutlined /></Tooltip></div>
                                :
                                <div className='custom_card_icon'><Tooltip title={ele && ele.mode} placement='left'><EyeOutlined /></Tooltip></div>
                            }
                            <text className='custom_card_label'>{ele && ele.title}</text>
                        </div>
                    </Card>
                </Col>
            )
        })
        return cards;
    }  

    render(){
        return (
            <div className='about_content_container'>
                <Row gutter={[12,12]}>{this.getContent(this.props.state, this.props.callback)}</Row>
            </div>
        )
    }
}

export default Content;
