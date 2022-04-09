const debit = (payload) => {
    return {
        type : "debit",
        payload
    }
}

export default debit