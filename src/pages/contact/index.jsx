import React from 'react';
import Content from './content';
import NavBar from '../../components/navbar';
import './index.css';
import '../global.css';

class Contact extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: "",
            submitCounter: 0,
            form: {
                firstName: "",
                lastName: "",
                emailID: "",
                phoneNumber: "",
                message: ""
            },
            sendingMessage: false,
            sentMessageSuccessfully: false,
            failedToSendMessage: false,
        }
    }

    componentDidMount() {
        const location = window.location;
        this.setState({
            active: `${location.pathname}${location.search}`,
        })
    }

    callback = (id, value) => {
        if(!id || !id.length){
            return ;
        }
        this.setState({
          [id]: value
        })
    }

    updateForm = (key, value) => {
        let { form } = this.state;
        if(!key) {
            return;
        }
        if(!form || !Object.keys(form).length) {
            form = {firstName: "", lastName: "", emailID: "", phoneNumber: "", message: ""};
        }
        form[key] = value;
        this.setState({form})
    }

    sendMessage = (e) => {
        const { form, submitCounter, sendingMessage } = this.state;
        // Validate form data
        if(!form || !Object.keys(form).length) {
            // If the form data is not valid, then increment submitCounter
           this.setState({submitCounter: submitCounter + 1})
           return;
        }
        for(let key in form) {
           if(!form[key]) {
              // If the form data is not valid, then increment submitCounter
              this.setState({submitCounter: submitCounter + 1})
              return;
           }
        }

        // If the form data is valid, then set sendingMessage to true
        this.setState({sendingMessage : true},  () => {
            // make API Call here, and once received API response, set sendingMessage to false
            setTimeout(() => {
                this.setState({sendingMessage: false, sentMessageSuccessfully: true})
            }, 3000)
        })
    }

    retry = () => {
        this.setState({failedToSendMessage: false})
    }

    sendNewMessage = () => {
        this.setState({sentMessageSuccessfully: false, submitCounter: 0, form: {firstName: "", lastName: "", emailID: "", phoneNumber: "", message: ""}})
    }

    render(){
        const { active } = this.state;

        return (
            <div className='page_layout'>
                <div className='page_navbar'><NavBar active={active} callback={this.callback} /></div>
                <div className='page_content'><Content state={this.state} updateForm={this.updateForm} sendMessage={this.sendMessage} retry={this.retry} sendNewMessage={this.sendNewMessage} /></div>
            </div>
        )
    }
}

export default Contact;