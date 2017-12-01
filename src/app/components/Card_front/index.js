import React from 'react';
import {connect} from 'react-redux';

import * as style from './style.scss';

class Card_front extends React.Component {
    constructor(){
        super();
        this.state = {currentNumber:'', currentText: ''}

        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    renderMonths(){
        const months = 12;
        let options = [<option key="no_month">__</option>];
        for(let i=1; i<=months; i++){
            let month = ('0'+i).substr(-2,2);
            options.push(<option key = {month} value={month}>{month}</option>)
        }
        return options;
    }

    renderYears(){
        let now = new Date();
        const yearNow = now.getFullYear();
        let yearLast = yearNow + 10;
        let options = [<option key="no_year">____</option>];
        for(let i = yearNow; i<=yearLast; i++){
            options.push(<option key = {i} value={i}>{i}</option>)
        }
        return options;
    }

    handleNumberChange(e){
        let val = e.target.value;
        let check = /[^\d+$]/;
        if (check.test(val)) {
            val = val.replace(check, '');
        }
        this.setState({currentText: val})
        let {sendNumber} = this.props.actions;
        sendNumber(val)
    }

    handleChange(e){
        let val = e.target.value;
        let check = /[^\d+$]/;
        if (check.test(val)) {
            val = val.replace(check, '');
        }
        if(e.target.name == 'month') {
            this.setState({currentMonth: val})
            let {sendMonth} = this.props.actions;
            sendMonth(val)
        }
        if(e.target.name == 'year') {
            this.setState({currentYear: val})
            let {sendYear} = this.props.actions;
            sendYear(val)
        }
    }


    render(){
        return(
            <div className = {style.card_front}>
                <h4>Платёжная карта</h4>
                <div className = {style.number}>
                    <h5>Номер платёжной карты:</h5>
                    <input name = 'number'
                           type="text"
                           onChange = {this.handleNumberChange}
                           value = {this.state.currentText}
                           maxLength = '16'/>
                </div>
                <div className = {style.expirationDate}>
                    <h5>Срок действия: (ММ/ГГ)</h5>
                    <select name='month' onChange = {this.handleChange}>
                        {this.renderMonths()}
                    </select>
                    <select name='year' onChange = {this.handleChange}>
                        {this.renderYears()}
                    </select>
                </div>
            </div>
        )
    }
}

export default connect()(Card_front)