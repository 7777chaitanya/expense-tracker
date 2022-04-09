import initialState from "../initialState"

const accountBalanceReducer = (state=initialState, action) => {
    console.log(action.payload)
    if(action.type === 'credit' && action.payload.bank === 'sbi'){
        state.sbiAccountBalance = Number(state.sbiAccountBalance) + Number(action.payload.amount)
        console.log("state=>",state.sbiAccountBalance)
         return state
    }
    if(action.type === 'debit' && action.payload.bank === 'sbi'){
        state.sbiAccountBalance -= action.payload.amount
        return state
    }
    if(action.type === 'credit' && action.payload.bank === 'icici'){
        state.iciciAccountBalance += action.payload.amount
        return state
   }
   if(action.type === 'debit' && action.payload.bank === 'icici'){
       state.iciciAccountBalance -= action.payload.amount
       return state
   }
    return state

}


export default accountBalanceReducer;