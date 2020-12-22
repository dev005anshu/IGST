import AxiOS from "axios"
import config from "../config";

let url = config.baseUrl
export default () => {
    console.log('basr url from statics is ', url)
    return AxiOS.create({
        baseURL: url,
        timeout: 45000
    })
}