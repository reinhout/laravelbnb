import VueRouter from "vue-router";
import Bookables from "./components/Bookables/Bookables";
import BookableLisItem from "./components/Bookables/BookableListItem";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/second",
        component: BookableLisItem,
        name: "second",
    },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history",
});

export default router;