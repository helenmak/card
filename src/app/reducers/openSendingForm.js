const initialState = {
    openForm: false,
    email: ''
}

const reducer = (state = initialState, action)=>{
    let _state = {...state}, _action = {...action};

    switch(_action.type){

        case 'OPEN_SENDING_FORM':
            _state.openForm = true;
            break;

        case 'CLOSE_SENDING_FORM':
            _state.openForm = false
            _state.email = ''
            break;

        case 'SEND_ON_EMAIL':
            _state.email = _action.payload
            break;

        default:
            return state;
    }
    return _state;
};

export default reducer;
