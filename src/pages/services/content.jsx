import React, { lazy, Suspense } from 'react';
import { } from '@ant-design/icons';
import { Avatar, Card, Row, Col, Carousel } from 'antd';
import CustomCarousel1 from '../../components/Carousel/carousel1';

const { Meta } = Card;
const CustomCard1 = lazy(() => import('../../components/Card/card1'));
const CustomCard2 = lazy(() => import('../../components/Card/card2'));

const carouselStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


class ServiceContent extends React.Component {
    constructor(props){
        super(props)
    }

    parseServicesData = (services) => {
        if(!services || !Array.isArray(services) || !services.length) {
            return [];
        }
        
        return services.map((service) => {
            return {
                title: service.name,
                content: service.desc,
                image: service.image
            }
        })
    }

    parseProjectsData = (projects) => {
        if(!projects || !Array.isArray(projects) || !projects.length) {
            return [];
        }
        
        return projects.map((project) => {
            return {
                title: project.count,
                content: project.status,
            }
        })
    }

    parseClientsData = (clients) => {
        if(!clients || !Array.isArray(clients) || !clients.length) {
            return [];
        }

        return clients.map((client) => {
            return {
                title: client.name,
                subTitle1: client.designation,
                subTitle2: client.company,
                content: client.review,
                rating: client.rating,
                image: client.image,
            }
        })
    }

    render(){
        return(
            <div className='service-content'>
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
            <div className='service-content-header'>  
                <div className="service-header-text">W h a t <span style={{marginLeft: '1rem', marginRight: '1rem'}}>I</span>D o</div>
                <div className="service-header-subText">My Services</div>
            </div>
        )
    }

    renderBody = () => {
        return (
            <div className='service-content-body'>
                {/*Title*/}
                <div className="service-content-body-title">
                    <text className='service-content-body-title-text'>WHAT I DO</text>
                    <text className='service-content-body-title-subtext'></text>
                </div>
                {/*Title Bottom Border*/}
                <div className='service-content-body-title-bottom-border-container'>
                    <span className='service-content-body-title-bottom-border' />
                </div>
                {/*Services*/}
                {this.renderServices()}
                {/*Projects*/}
                {this.renderProjects()}
                {/*Clients Review*/}
                {this.renderClients()}
            </div>
        )
    }

    renderServices = () => {
        let { services } = this.props.state;
        services = this.parseServicesData(services);

        if(!services || !Array.isArray(services) || !services.length) {
            return <div>No Services Available</div>
        }

        return (
            <div className='services'>
                <Row gutter={[16, 16]}>
                    {
                        services.map((service) => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <CustomCard1 image={service.image} title={service.title} content={service.content} />
                                    </Suspense>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )  
    }

    renderProjects = () => {
        let { projects } = this.props.state;
        projects = this.parseProjectsData(projects);

        if(!projects || !Array.isArray(projects) || !projects.length) {
            return <div>No Projects Available</div>
        }

        return (
            <div className='projects'>
               <div className="service-content-body-title">
                    <text className='service-content-body-title-text'>Projects</text>
                    <text className='service-content-body-title-subtext'></text>
                </div>
                <div className='service-content-body-title-bottom-border-container'>
                    <span className='service-content-body-title-bottom-border' />
                </div>

                <Row gutter={[24, 24]}>
                    {
                        projects.map((project) => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <CustomCard2 title={project.title} content={project.content} />
                                    </Suspense>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }

    renderClients = () => {
        let { clients } = this.props.state;
        clients = this.parseClientsData(clients);

        if(!clients || !Array.isArray(clients) || !clients.length) {
            return <div>No Testimonial Available</div>
        }

        return (
            <div className='clients'>
               <div className="service-content-body-title">
                    <text className='service-content-body-title-text'>MY HAPPY CLIENTS</text>
                    <text className='service-content-body-title-subtext'>who are extremely in love with the products</text>
                </div>
                <div className='service-content-body-title-bottom-border-container'>
                    <span className='service-content-body-title-bottom-border' />
                </div>

                <CustomCarousel1 items={clients} />

            </div>
        )
    }

}

export default ServiceContent;