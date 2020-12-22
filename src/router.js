import Vue from "vue";
import Router from "vue-router";
import EnquiryPage from './components/EnquiryPage.vue';
import SuccessPage from './components/SuccessPage.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: "*",
        name: "EnquiryPage",
        component: EnquiryPage

    },
    {
        path: "/",
        name: "EnquiryPage",
        component: EnquiryPage
    },
    {
        path: "/EnquiryPage",
        name: "EnquiryPage",
        component: EnquiryPage
    },
    {
        path: "/SuccessPage",
        name: "SuccessPage",
        component: SuccessPage
    }]

});