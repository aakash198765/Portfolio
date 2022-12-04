import React from 'react';
import { Card, Row, Col, Image, Button } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import Flow from '../../components/ReactFlow';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import printJS from 'print-js';
import { EdgeText } from 'react-flow-renderer';


const response1 = [
    {
        image: "https://ip.cambridgeschool.edu.in/wp-content/uploads/sites/6/2022/07/Book-Class-10.png",
        title: "X",
        subTitle: "D.A.V Public School",
        startDate: 1396594317000,
        endDate: 1428130317000,
        content: "ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.",
        certificate: "https://qph.cf2.quoracdn.net/main-qimg-87f2d8871f69b1289d72412b7e253d2c-lq"
    },
    {
        image: "https://www.rkvityclasses.com/images/class-12.jpg",
        title: "XII",
        subTitle: "St. Francis de Sales PU College",
        startDate: 1435992717000,
        endDate: 1499151117000,
        content: "ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.",
        certificate: "https://i.pinimg.com/736x/5b/6e/1a/5b6e1a3a74ff1a79e825bf277c6c0a11.jpg"
    },
    {
        image: "https://img.freepik.com/premium-vector/b-tech-lettermark-logo_48832-810.jpg?w=2000",
        title: "B.Tech",
        subTitle: "FET, Jain University",
        startDate: 1501829517000,
        endDate: 1623307917000,
        content: "ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.",
        certificate: "https://degree.betinstitutions.org/wp-content/uploads/2019/03/Narrative-Review-Application1-800x577.jpeg"
    }
]

const response2 = [
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ddd54304e0fdd753b530d54/1577732295045-ULJ60FYP0LTYP8U7P9XH/param.png",
        title: "Application Developer",
        subTitle: "Param Network", 
        startDate: 1621839117000,
        endDate: 0,
        content: "ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.",
        certificate: "https://qph.cf2.quoracdn.net/main-qimg-87f2d8871f69b1289d72412b7e253d2c-lq"
    }
]



class Content extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data : [],
            visible: false,
            scaleStep: 0.5,
            certificate: "",
        }

        this.active = "";
    }

    setData = () => {
        const { active } = this.props;
        let data = [];
        if(active === "education") {
            data = response1;
        } else if(active === "experience") {
            data = response2;
        } else {
            data = response1;
        }
        this.setState({data: data})
    }

    shouldUpdateData = () => {
        debugger
        if(this.props.active !== this.active ){
            this.active = this.props.active;
            this.setData();
        }
    }

    getDate = (timestamp) => {
        if(!timestamp) {
            return 'Current'
        }
        const fullDate = new Date(timestamp).toLocaleDateString();
        return fullDate;
    }

    render(){
       this.shouldUpdateData();

        return (
         <div>
            {/* To render the content */}
            {this.renderMainContent()}
            {/* To preview the image */}
            {this.renderImagePreview()}
            {/* Download */}
            <div id='certificate'><img id="certificateImage"  src=""/></div>
         </div>
        )
    }

    renderMainContent = () => {
       const { active } = this.props;
       switch(active) {
        case 'education': return this.renderEducation();
        case 'experience': return this.renderExperience();
        default:
            return this.renderEducation();
       }
    }

    renderEducation = () => {
        const { data } = this.state;
        return (
            <>
             {
                data.map((ele) => {
                    return (
                    <Card title="" bordered={false} className="card-container">
                        <Row gutter={[24, 10]}>
                          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                            <div className="education-header">
                              <Image
                              className='education-header-image'
                              width="10rem"
                              height="10rem"
                              preview={false}
                              src={ele.image}
                            />
                            <text className='education-header-title'>{ele.title}</text>
                            <text className='education-header-subTitle'>{ele.subTitle}</text>
                            <text className='education-header-date'>{this.getDate(ele.startDate)} - {this.getDate(ele.endDate)}</text>
                            </div>
                          </Col>
                  
                          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <div className="education-content">{ele.content}</div>
                          </Col>
                  
                          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                            <div className="education-footer">
                            <Button className="education-footer-button-1" type="primary" icon={<EyeOutlined />} onClick={() => this.setState({certificate: ele.certificate, visible: true})} >
                              Certificate
                            </Button>
                            <div style={{marginTop: ".8rem"}}></div>
                             <Button className="education-footer-button-2" type="primary" icon={<DownloadOutlined />} onClick={() => this.printDocument(ele.certificate)} >
                              Certificate
                             </Button>
                            </div>
                          </Col>
                        </Row>
                    </Card>
                    )
                })
             }
            </>
        )
    }

    renderExperience = () => {
        const { data } = this.state;
        return (
            <>
             {
                data.map((ele) => {
                    return (
                    <Card title="" bordered={false} className="card-container">
                        <Row gutter={[24, 10]}>
                          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                            <div className="education-header">
                              <Image
                              className='education-header-image'
                              width="10rem"
                              height="10rem"
                              preview={false}
                              src={ele.image}
                            />
                            <text className='education-header-title'>{ele.title}</text>
                            <text className='education-header-subTitle'>{ele.subTitle}</text>
                            <text className='education-header-date'>{this.getDate(ele.startDate)} - {this.getDate(ele.endDate)}</text>
                            </div>
                          </Col>
                  
                          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <div className="education-content">{ele.content}</div>
                          </Col>
                  
                          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                            <div className="education-footer">
                            <Button className="education-footer-button-1" icon={<EyeOutlined />} onClick={() => this.setState({certificate: ele.certificate, visible: true})} >
                                Employee Letter
                            </Button>
                            <div style={{marginTop: ".8rem"}}></div>
                             <Button className="education-footer-button-2" icon={<DownloadOutlined />} onClick={() => this.printDocument(ele.certificate)} >
                                Employee Letter
                             </Button>
                            </div>
                          </Col>
                        </Row>
                    </Card>
                    )
                })
             }
            </>
        )
    }

    renderImagePreview = () => {
        const { visible, scaleStep, certificate} = this.state;

        return (
            <>
             {/* Preview */}
                <Image
                    style={{ display: 'none' }}
                    src={certificate}
                    preview={{
                        visible,
                        scaleStep,
                        src: certificate ? certificate :  "https://www.pngkit.com/png/detail/930-9306658_404-not-found.png",
                        onVisibleChange: (value) => {
                        this.setState({certificate: "", visible: false});
                        },
                    }}
                />
            </>
        )
    }

    printDocument = (certificate) => {
        let certificateImage = document.createElement("certificateImage");
        certificateImage.setAttribute("src", certificate);

        html2canvas(document.querySelector('#certificate'))
          .then((canvas) => {
            const img = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(img, 'PNG', 10, 10);
            pdf.save("download.pdf");
           // printJS({printable: img, type: "image", documentTitle: "document.pdf", dpi: 300, scale: 1})
          })
        ;
    }
}

export default Content;