export function openSendingForm(){
    return{
        type: 'OPEN_SENDING_FORM',
    }
}

export function closeSendingForm(){
    return{
        type: 'CLOSE_SENDING_FORM',
    }
}

export function showPreloader(){
    return {
        type: 'SHOW_PRELOADER',
    }
}

export function hidePreloader(){
    return {
        type: 'HIDE_PRELOADER',
    }
}

export function showSuccessMsg(){
    return (dispatch)=> {
        setTimeout(()=>{
            dispatch(hideSuccessMsg());
        }, 4*1000)
        return dispatch({type: 'SHOW_SUCCESS_MSG'});
    }
}

export function hideSuccessMsg(){
    return {
        type: 'HIDE_SUCCESS_MSG',
    }
}

export function submitCard(){
    return (dispatch) => {
        dispatch(showPreloader())
        setTimeout(()=>{
            dispatch(hidePreloader())
            dispatch(showSuccessMsg());
        }, 2*1000)
    }
}

export function abortSubmit(err){
    return {
        type: "ABORT_SUBMIT",
        payload: err
    }
}

export function sendCVV(cvv){
    return{
        type: 'SEND_CVV',
        payload: cvv
    }
}

export function sendNumber(number){
    return{
        type: 'SEND_NUMBER',
        payload: number
    }
}

export function sendMonth(month){
    return{
        type: 'SEND_MONTH',
        payload: month
    }
}

export function sendYear(year){
    return{
        type: 'SEND_YEAR',
        payload: year
    }
}

export function sendOnEmail(year){
    return{
        type: 'SEND_ON_EMAIL',
        payload: year
    }
}
