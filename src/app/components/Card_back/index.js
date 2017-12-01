import React from 'react';
import {connect} from 'react-redux';

import * as style from './style.scss';

class Card_back extends React.Component {
    constructor(){
        super();
        this.state = {currentCVV: ''}

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        let val = e.target.value;
        let check = /[^\d+$]/;
        if (check.test(val)) {
            val = val.replace(check, '');
        }
        this.setState({currentCVV: val})
        let {sendCVV} = this.props.actions;
        sendCVV(val)
    }

    render(){
        return(
            <div className = {style.card_back}>
                <h5>CVV:</h5>
                <input type="text"
                       name="cvv"
                       onChange = {this.handleChange}
                       value = {this.state.currentCVV}
                       maxLength = '3'
                />
            </div>
        )
    }
}

export default connect()(Card_back)