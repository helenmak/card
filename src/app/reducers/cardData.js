const initialState = {

}

const reducer = (state = initialState, action)=>{
    let _state = {...state}, _action = {...action};

    switch(_action.type){

        case 'SEND_CVV':
            _state = {
                ...state,
               cvv: _action.payload
            }
            break;
        case 'SEND_NUMBER':
            _state = {
                ...state,
                number: _action.payload
            }
            break;
        case 'SEND_MONTH':
            _state = {
                ...state,
                month: _action.payload
            }
            break;
        case 'SEND_YEAR':
            _state = {
                ...state,
                year: _action.payload
            }
            break;

        default:
            return state;
    }

    return _state;
};

export default reducer;
