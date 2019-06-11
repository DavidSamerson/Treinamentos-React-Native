import Home from "./pages/home/home";
import User from "./User";

const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/",
        component: User,
        exact: true
    }
];

export default routesConfig