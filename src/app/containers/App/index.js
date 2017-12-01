import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Card_front from 'app/components/Card_front';
import Card_back from 'app/components/Card_back';
import SendCheckbox from 'app/components/SendCheckbox';
import SubmitCard from 'app/components/SubmitCard';
import Msg from 'app/components/Msg';
import Preloader from 'app/components/Preloader'
import * as actions from 'app/actions';

class App extends React.Component {
    constructor(){
        super();

    }

    render(){
        return(
            <div>
                <Card_front actions = {this.props.actions}/>
                <Card_back actions = {this.props.actions}/>
                <SendCheckbox actions = {this.props.actions} openForm = {this.props.openForm}/>
                <SubmitCard actions = {this.props.actions} cardData = {this.props.cardData} email = {this.props.email} openForm = {this.props.openForm}/>
                {this.props.preloader ? <Preloader actions = {this.props.actions} /> : null}
                <Msg actions = {this.props.actions} successMsg = {this.props.successMsg} abortMsg = {this.props.abortMsg} abortSubmit = {this.props.abortSubmit}/>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        openForm: state.openSendingForm.openForm,
        email: state.openSendingForm.email,
        preloader: state.submitCard.preloader,
        successMsg: state.submitCard.successMsg,
        cardData: state.cardData,
        abortSubmit: state.submitCard.abortSubmit,
        abortMsg: state.submitCard.abortMsg,
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
