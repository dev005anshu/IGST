
const setListOfDetails = (context, setlistOfDetails) => {
  // to call mutation to set repository doc base 64
  context.commit('setListOfDetails', setlistOfDetails)
}
const setGstin = (context, gstin) => {
    context.commit('setGstin', gstin)
}
const setPortcode = (context, portcode) => {
    context.commit('setPortcode', portcode)
}

export {
    setListOfDetails,
    setGstin,
    setPortcode
}
