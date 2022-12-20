import './style.css'
import React from 'react';
import { Carousel, Image } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const customIcons = {
  1: <FrownOutlined style={{color: '#FF0000'}} />,
  2: <FrownOutlined style={{color: "#F08080"}} />,
  3: <MehOutlined   style={{color: "#ffd966"}} />,
  4: <SmileOutlined style={{color: "#93c47d"}} />,
  5: <SmileOutlined style={{color: "#6aa84f"}} />,
};

class CustomCarousel1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { items } = this.props;
        return (
            <Carousel autoplay>
                {this.renderCarouselItems(items)}
            </Carousel>
        )
    }

    renderCarouselItems = (items) => {
        if(!items || !Array.isArray(items) || !items.length) {
            return <div>No Data</div>
        }

        
        return items.map((item) => {
            return (
                    <div className='carousel-content-1'>
                        <span className='quote-1'>❝</span>
                        <span className='carousel-content-1-content'>{item && item.content}</span>

                        <span className='profile-container'>
                            <span className='profile'>
                                <Image
                                    alt={item.title}
                                    src={item.image}
                                    preview={false}
                                    className='profile-image'
                                />
                                <text className='profile-name'>{item.title}</text>
                                <text className='profile-designation'>{item.subTitle1} @{item.subTitle2}</text>
                                <Rate defaultValue={item.rating} character={({ index }) => customIcons[index + 1]} className="profile-rating" />
                            </span>
                        </span>
                    </div>
            )
        })
    }
    
}

export default CustomCarousel1;