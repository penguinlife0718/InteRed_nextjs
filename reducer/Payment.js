const initialState = {
    buyPlan: '',
    buyAmount: '',
    seatNumber: -1,
    paymentIsActive: false,
}
const Payment = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'togglePaymentField': {
            return {
                ...state,
                buyPlan: action.buyPlan || '',
                buyAmount: action.buyAmount || '',
                seatNumber: action.seatNumber || -1, /*PM弄的 Agency Payment*/
                paymentIsActive: !state.paymentIsActive,
            }
        }
        default:
            return state;
    }
}
export default Payment;