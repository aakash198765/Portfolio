import React from 'react';
import { Image } from 'antd';
const image = 'https://svgur.com/i/AXk.svg'

class NoData extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render () {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <Image
                    preview={false}
                    width={'100%'}
                    height={'100%'}
                    style={{
                    }}
                    src={image}
                />
            </div>
        )
    }
}

export default NoData;