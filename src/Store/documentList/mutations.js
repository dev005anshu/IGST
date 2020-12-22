const setListOfDetails = (state, listOfDetails) => {
    // to set repository doc base 64
    state.listOfDetails = listOfDetails
}
const setPortcode = (state, portcode) => {
    state.portcode = portcode
}
const setGstin = (state, gstin) => {
    state.gstin = gstin
}

export {
    setListOfDetails,
    setPortcode,
    setGstin
}