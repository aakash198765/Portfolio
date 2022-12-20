import React from 'react';
import Content from './content';
import NavBar from '../../components/navbar';
import './index.css';
import '../global.css';
import Lottie from 'lottie-react';
import ScrollToTop from './scroll-to-top.json';
import { ArrowUpOutlined } from '@ant-design/icons';
import response from './response.json';

const links = [
    {
        category: 'Frontend',
        categoryDesc: 'Frontend'
    },
    {
        category: 'Backend',
        categoryDesc: 'Backend'
    },
    {
        category: 'DevOps',
        categoryDesc: 'DevOps'
    }
];

const data = {
  "Frontend":  [
    {
        _id: 1,
        title: "HTML",
        url: "https://adriancs.com/wp-content/uploads/2022/09/html.png",
        category: "Frontend",
        categoryDesc: "Frontend",
    },
    {
        _id: 2,
        title: "CSS",
        url: "https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1669659911/Algolia_com_Blog_assets/Featured_images/engineering/simplifying-tailwind-css-with-eslint-tools-tagged-template-literals-and-a-lot-more/qwydbm5bw9bv11zq7rvr.png",
        category: "Frontend",
        categoryDesc: "Frontend",
    },
    {
        _id: 3,
        title: "Bootstrap",
        url: "https://cyberlancers.com/images/default-source/blog/bootstrap-logo.png?sfvrsn=106f9c97_1",
        category: "Frontend",
        categoryDesc: "Frontend",
    },
    {
        _id: 4,
        title: "ReactJS",
        url: "https://miro.medium.com/max/1400/1*FGFRP0QNXfTCOfGl3cRTDg.png",
        category: "Frontend",
        categoryDesc: "Frontend",
    },
    {
        _id: 5,
        title: "React Native",
        url: "https://miro.medium.com/max/700/1*C3kxjCrJy-aWSMpe2chfaA.png",
        category: "Frontend",
        categoryDesc: "Frontend",
    },
    {
        _id: 6,
        title: "JavaScript",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        category: "Frontend",
        categoryDesc: "Frontend",
    },
    {
        _id: 7,
        title: "ECMA Script",
        url: "https://www.parthenonsoftware.com/collectedstatic/img/logos/es6.png",
        category: "Frontend",
        categoryDesc: "Frontend",
    }
  ], 
  "Backend": [
    {
        _id: 8,
        title: "JavaScript",
        url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        category: "Backend",
        categoryDesc: "Backend",
    },
    {
        _id: 9,
        title: "ECMA Script",
        url:"https://www.parthenonsoftware.com/collectedstatic/img/logos/es6.png",
        category: "Backend",
        categoryDesc: "Backend",
    },
    {
        _id: 10,
        title: "TypeScript",
        url: "https://livecodestream.dev/post/what-why-and-how-of-typescript-for-javascript-developers/featured.jpg",
        category: "Backend",
        categoryDesc: "Backend",
    },
    {
        _id: 11,
        title: "NodeJS",
        url: "https://res.cloudinary.com/practicaldev/image/fetch/s--J_VYh9t9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d105ly7n2r4ob6zxu8ch.png",
        category: "Backend",
        categoryDesc: "Backend",
    },
    {
        _id: 12,
        title: "MongoDB",
        url: "https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1644403814/hevo-learn/springboot_MongoDB_configuration_mongodb.jpg?_i=AA",
        category: "Backend",
        categoryDesc: "Backend",
    }
  ],
  "DevOps": []
}

class Service extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: "",
            stacks: [],
            certificates: [],
            activeLink: ""
        }
        this.pageContentRef = React.createRef();
    }

    componentDidMount() {
        // const location = window.location;
        // this.setState({
        //     active: `${location.pathname}${location.search}`,
        //     response: response,
        // })

        this.makeApiCall();

        this.handleScroll()
    }

    makeApiCall = () => {
        this.setState({
            stacks: response && response.stacks,
            certificates: response && response.certificates,
            activeLink: links && links[0] && links[0].category,
        })
    }

   
    handleScroll = () => {
        let scrollTop = this.pageContentRef && this.pageContentRef.current && this.pageContentRef.current.scrollTop;
        if(!scrollTop ||  scrollTop < 400) {
            // document.getElementById('scroll-to-top-and-bottom').style.top = '5.5rem';
            // document.getElementById('scroll-to-top-and-bottom').style.transform = 'rotate(180deg)';
            // document.getElementById('scroll-to-top-and-bottom').style.bottom = '';
            document.getElementById('scroll-to-top-and-bottom').style.display  = 'none';
        } else {
            document.getElementById('scroll-to-top-and-bottom').style.top = '';
            document.getElementById('scroll-to-top-and-bottom').style.transform = 'rotate(0deg)';
            document.getElementById('scroll-to-top-and-bottom').style.bottom = '1.5rem';
            document.getElementById('scroll-to-top-and-bottom').style.display  = 'flex';
        }
    }
    
    callback = (id, value) => {
        if(!id || !id.length){
            return ;
        }
        this.setState({
          [id]: value
        })
    }

    updateActiveLink = (activeLink) => {
        if(!activeLink) {
            return;
        }
        this.setState({activeLink: activeLink})
    }

    render(){
        const { active } = this.state;

        return (
            <div className='page_layout'>
                <div className='page_navbar'><NavBar active={active} callback={this.callback} /></div>
                <div className='page_content' ref={this.pageContentRef} onScroll={() => this.handleScroll()}>
                    <Content 
                        state={this.state} 
                        callback={this.callback} 
                        updateActiveLink={this.updateActiveLink}
                    />
                </div>
                {this.renderScrollToTopAndBottom()}
            </div>
        )
    }
    

    renderScrollToTopAndBottom = () => {
        return (
            <span 
                id='scroll-to-top-and-bottom'
                className='scroll-to-top-and-bottom' 
                onClick={() => {
                   let scrollTop = this.pageContentRef && this.pageContentRef.current && this.pageContentRef.current.scrollTop;
                   if(!scrollTop || scrollTop < 400) {
                        this.pageContentRef.current.scrollTo(0, document.body.scrollHeight);
                   } else {
                        this.pageContentRef.current.scrollTo(0, 0);
                   }
                }}
            >
                <Lottie animationData={ScrollToTop} loop={true} />
                {/* <ArrowUpOutlined /> */}
            </span>
        )
    }
}

export default Service;