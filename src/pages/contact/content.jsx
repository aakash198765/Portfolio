import React from 'react';
import { Button, Form, Input, InputNumber, Select, Row, Col,  } from 'antd';
import { SendOutlined, SaveTwoTone  } from '@ant-design/icons';
import Animation from '../../components/Animation';
import './index.css'
const { Option } = Select;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};

class Content extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    getPrefixSelector = () => {
        return (
            <Form.Item name="prefix" noStyle>
              <Select
                style={{
                  width: 200,
                }}
              >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
              </Select>
            </Form.Item>
          );
    }

    getContactForm = () => {
        return (
            <Form layout="vertical" name="nest-messages" onFinish={()=>{}} validateMessages={()=>{}} className="contact_form_1">
                <div className='ant_form_header'><span className="ant_form_header_text"></span><span className="ant_form_header_icon"><SendOutlined twoToneColor="#f54c18" type="primary" htmlType="submit" /></span></div>
                <div className='ant_form_body'>
                    <Form.Item
                        className='ant_form_input_label'
                        name={['user', 'name']}
                        label="Your Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input className='form_custom_input' />
                    </Form.Item>
                    <Form.Item
                        className='ant_form_input_label'
                        name={['user', 'email']}
                        label="Mail"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                            },
                        ]}
                    >
                        <Input className='form_custom_input' />
                    </Form.Item>
                    <Form.Item
                        className='ant_form_input_label'
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            className='form_custom_input'
                            //addonBefore={this.getPrefixSelector}
                        />
                    </Form.Item>
                    <Form.Item 
                        className='ant_form_input_label'
                        name={['user', 'website']} 
                        label="Services"
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input className='form_custom_input' />
                    </Form.Item>
                    <Form.Item 
                        className='ant_form_input_label'
                        name={['user', 'introduction']} 
                        label="Message"
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <Input.TextArea className='form_custom_input' />
                    </Form.Item>
                 </div>
            </Form>
        )
    }

    getContactIcon = () => {
        return (
            <div className="contact_container">
                <div className="contact_text">Get in touch!</div>
                <div className="contact_sub_text">Contact us for a quote, help to join the team.</div>
                <div className="contact_icon_text"><Animation /></div>
            </div>
        )
    }

    render(){
        return (
            <Row gutter={[0, 0]} className="row_content">
                <Col className="contact_icon">{this.getContactIcon()}</Col>
                <Col className="contact_form">{this.getContactForm()}</Col>
            </Row>
        )
    }
}

export default Content;