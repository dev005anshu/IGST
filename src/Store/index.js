import Vue from 'vue'
import Vuex from 'vuex'

import documentList from './documentList'


Vue.use(Vuex)
Vue.config.devtools = true
    /*
     * If not building with SSR mode, you can
     * directly export the Store instantiation
     */

export default function( /* { ssrContext } */ ) {
    const Store = new Vuex.Store({
        /*
         * methods declared for using state management
         */
        modules: {
            documentList
        }
    })

    return Store
}