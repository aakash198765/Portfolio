import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Col, Image, Row, } from 'antd';
import Lottie from 'lottie-react';
import NoData from '../../components/NoData';


class Content extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    parseCertificatesData = (certificates) => {
        if(!certificates || !Array.isArray(certificates) || !certificates.length) {
            return [];
        }

        return certificates.map((certificate) => {
            return {
                title: certificate.certificate,
                subTitle: certificate.certificateDesc,
                content: certificate.summary,
                image: certificate.image
            }
        })
    }

    render () {
        return (
            <div className='certification-content'>
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
            <div className='certification-content-header'>  
                <div className="certification-header-text">W h a t <span style={{marginLeft: '1rem', marginRight: '.5rem'}}>I</span> <span style={{marginLeft: '.5rem', marginRight: '1rem'}}>H a v e</span>E a r n e d</div>
                <div className="certificatione-header-subText">Tech Certifications</div>
            </div>
        )
    }

    renderBody = () => {
        return (
            <div className='certification-content-body'>
                {this.renderTechStacks()}
                {this.renderTechCertificates()}
            </div>
        )
    }

    renderTechStacks = () => {
        const { stacks, activeLink } = this.props.state; 

        if(!stacks || !Array.isArray(stacks) || !stacks.length) {
            return <></>;
        }

        return (
            <div className='tech-stacks-container'>
                <span className='tech-stack-title'>STACKS</span>
                <span>
                    {
                        stacks.map((stack) => {
                        return (
                            <span 
                                className={stack.name == activeLink ? 'tech-stack-item tech-stack-item-active' : 'tech-stack-item'} 
                                onClick={() => this.props.updateActiveLink(stack.name)}
                            >
                                {stack.desc}
                            </span>
                        )
                        })
                    }
                </span>  
            </div>
        )
    }

    renderTechCertificates = () => {
        let { activeLink, certificates } = this.props.state;
        certificates = this.parseCertificatesData( activeLink && certificates && certificates[activeLink]);
        

        if(!certificates || !Array.isArray(certificates) || !certificates.length) {
            return (
                <div className='noDataContainer' style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span className='noData' style={{width: '50%', }}> <NoData /></span>
                </div>
            )
        }

        return (
            <>
                {
                    certificates.map((certificate, index) => {
                        if(parseInt(index) % 2 === 0) {
                            return ( 
                                <Row>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className='certificate-image-left'>
                                        <div className='certificate-image-container'>
                                            <Image
                                                preview={false}
                                                width={'100%'}
                                                height={'100%'}
                                                style={{
                                                }}
                                                src={certificate.image}
                                            />
                                        </div>
                                    </Col>
                                    {/* Web */}
                                    <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} className='certificate-content-left-web'>
                                        <div className='header-container'>
                                            <span className='header-title'>{certificate.title}</span>
                                            <span className='header-subTitle'>{certificate.subTitle}</span>
                                        </div>
                                        <div className='header-content'><text>{certificate.content}</text></div>
                                    </Col>
                                    {/* Mobile */}
                                    <Col xs={24} sm={24} md={0} lg={0} xl={0} xxl={0} className='certificate-content-left-mobile'>
                                        <div className='header-container'>
                                            <span className='header-title'>{certificate.title}</span>
                                            <span className='header-subTitle'>{certificate.subTitle}</span>
                                        </div>
                                        <div className='header-content'><text>{certificate.content}</text></div>
                                    </Col>
                                </Row>
                            )
                        } else {
                            return ( 
                                <Row>
                                    {/* Web */}
                                    <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} className='certificate-content-right-web'>
                                        <div className='header-container'>
                                            <span className='header-title'>{certificate.title}</span>
                                            <span className='header-subTitle'>{certificate.subTitle}</span>
                                        </div>
                                        <div className='header-content'><text>{certificate.content}</text></div>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className='certificate-image-right'>
                                        <div className='certificate-image-container'>
                                            <Image
                                                preview={false}
                                                width={'100%'}
                                                height={'100%'}
                                                style={{
                                                }}
                                                src={certificate.image}
                                            />
                                        </div>
                                    </Col>
                                    {/* Mobile */}
                                    <Col xs={24} sm={24} md={0} lg={0} xl={0} xxl={0} className='certificate-content-right-mobile'>
                                        <div className='header-container'>
                                            <span className='header-title'>{certificate.title}</span>
                                            <span className='header-subTitle'>{certificate.subTitle}</span>
                                        </div>
                                        <div className='header-content'><text>{certificate.content}</text></div>
                                    </Col>
                                </Row>
                            )
                        }
                    })
                }
            </>
        )

    }
}

export default Content;