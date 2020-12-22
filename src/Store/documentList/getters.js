const getListOfDetails = (state) => {
    // to return repository doc base 64
    return state.listOfDetails
}
const getGstin = (state) => {
        return state.gstin
}
const getPortcode = (state) => {
        return state.portcode
}

export {
    getListOfDetails,
    getGstin,
    getPortcode
}