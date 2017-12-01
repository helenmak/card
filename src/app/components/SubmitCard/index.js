import React from 'react';
import {connect} from 'react-redux';

import * as style from './style.scss'

class SubmitCard extends React.Component{
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        let missing = [];
        let short = [];
        let fields = {'cvv': 3, 'number': 16, 'year': 4, 'month': 2};
        let errorMsg = '';
        if(!Object.keys(this.props.cardData).length) {
            errorMsg = 'No data entered! ';
        } else {
            let fieldKeys = Object.keys(fields);
            fieldKeys.map((key,i)=>{
                if(!this.props.cardData[key]){
                    missing.push(key)
                } else if(this.props.cardData[key].length !== fields[key]){
                    short.push(key)
                }
            })
        }

        if(missing.length){
            errorMsg += 'You haven\'t entered ';
            for(let i = 0; i<missing.length; i++){
                errorMsg += ' "' + missing[i]+'"';
            }
            errorMsg += '. ';
        }
        if(short.length){
            short.length === 1 ? errorMsg += 'Field' : errorMsg += 'Fields';
            for(let i = 0; i<short.length; i++) {
                errorMsg += ' "' + short[i]+ '"';
            }
            errorMsg += ' too short. Check, please. '
        }
        if(this.props.openForm && this.props.email.length<5){ errorMsg += 'Enter valid email to store your data. '}

        let {submitCard, abortSubmit} = this.props.actions;
        errorMsg  ? abortSubmit(errorMsg) : submitCard();
    }

    render(){
        return(
            <div className = {style.submitCard}>
                <input type="submit" onClick = {this.handleClick} value="Send"/>
            </div>
        )
    }
}

export default connect()(SubmitCard)
