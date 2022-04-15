import initialState from "../initialState"

const accountBalanceReducer = (state=initialState, action) => {
    console.log(action.payload)
    if(action.type === 'credit' && action.payload.bank === 'sbi'){
        state.sbiAccountBalance = Number(state.sbiAccountBalance) + Number(action.payload.amount)
         return JSON.parse(JSON.stringify(state))
    }
    if(action.type === 'debit' && action.payload.bank === 'sbi'){
        state.sbiAccountBalance = Number(state.sbiAccountBalance) - Number(action.payload.amount)
        return JSON.parse(JSON.stringify(state))
    }
    if(action.type === 'credit' && action.payload.bank === 'icici'){
        state.iciciAccountBalance = Number(state.iciciAccountBalance) + Number(action.payload.amount)
        return JSON.parse(JSON.stringify(state))
    }
   if(action.type === 'debit' && action.payload.bank === 'icici'){
       state.iciciAccountBalance = Number(state.iciciAccountBalance) - Number(action.payload.amount)
       return JSON.parse(JSON.stringify(state))
    }
    return state

}


export default accountBalanceReducer;