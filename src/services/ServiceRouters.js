import Api from './api'
export default {
    submitFormData(inputdata) {
        return Api().post('getIgstValData', inputdata, { timeout: 90000 })
    },
    getCaptcha() {
        return Api().post('ServiceFromSweety')
    },
    checkingPortAvailability(inputdata) {
        return Api().get('checkingPortAvailability/'+inputdata, { timeout: 90000 })
    }

}