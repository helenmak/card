import React from 'react';
import {connect} from 'react-redux';

import * as style from './style.scss';

class SendOnEmail extends React.Component{
    constructor(){
        super();
        this.state = {
            currentEmail: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let val = e.target.value;
        this.setState({currentEmail: val})
        let {sendOnEmail} = this.props.actions;
        sendOnEmail(val)
    }

    render(){
        return(
            <div className = {style.sendOnEmail}>
                <input type="email" onChange = {this.handleChange} value = {this.state.currentEmail}/>
            </div>
        )
    }
}

export default connect()(SendOnEmail)