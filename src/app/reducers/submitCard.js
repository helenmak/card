const initialState = {
    preloader: false,
    successMsg: false
}

const reducer = (state = initialState, action)=>{
    let _state = {...state}, _action = {...action};

    switch(_action.type){

        case 'SHOW_PRELOADER':
            _state.preloader = true
            break;
        case 'HIDE_PRELOADER':
            _state.preloader = false
            break;
        case 'SHOW_SUCCESS_MSG':
            _state.successMsg = true
            _state.abortSubmit = false;
            break;
        case 'HIDE_SUCCESS_MSG':
            _state.successMsg = false
            _state.abortSubmit = false;
            break;
        case 'ABORT_SUBMIT':
            _state.abortSubmit = true;
            _state.abortMsg = _action.payload;
            _state.successMsg = false;
            break;

        default:
            return state;
    }

    return _state;
};

export default reducer;
