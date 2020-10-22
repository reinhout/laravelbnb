require("./bootstrap");

import VueRouter from "vue-router";
import go from "./go"
import router from "./routes";

window.Vue = require("vue");

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        go: go,
    },
});