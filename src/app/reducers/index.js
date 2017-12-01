import {combineReducers} from 'redux';

import openSendingForm from './openSendingForm';
import submitCard from './submitCard';
import cardData from './cardData';

const reducers = combineReducers({
    openSendingForm,
    submitCard,
    cardData
});

export default reducers;
