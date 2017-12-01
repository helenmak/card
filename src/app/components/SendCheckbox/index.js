import React from 'react';
import {connect} from 'react-redux';

import SendOnEmail from 'app/components/SendOnEmail';
import * as style from './style.scss';

class SendCheckbox extends React.Component{
    constructor(){
        super();
        this.state = {
            checked: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let checked = e.target.checked;
        let {openSendingForm, closeSendingForm} = this.props.actions;
        checked ? openSendingForm() : closeSendingForm();
    }

    render(){
        return(
            <div className = {style.sendCheckbox}>
                <label>Store the card
                    <input type="checkbox" onChange = {this.handleChange}/>
                    {this.props.openForm ? <SendOnEmail actions = {this.props.actions}/> : null}
                </label>
            </div>
        )
    }
}

export default connect()(SendCheckbox)
