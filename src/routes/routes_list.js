import BillingPage from "../modules/admin/pages/billing_page";
import DashboardPage from "../modules/admin/pages/dashboard_page";
import LoginPage from "../modules/admin/pages/login_page";
import ProfilePage from "../modules/admin/pages/profile_page";
import HomePage from "../modules/website/pages/home_page";

const routes_list = [
    {
        title: "Home Page",
        link: "/",
        component: HomePage
    },
    {
        title: "Login",
        link: "/login",
        component: LoginPage
    },
    {
        title: "Dashboard",
        link: "/dashboard",
        component: DashboardPage
    },
    {
        title: "Billing",
        link: "/billing",
        component: BillingPage
    },
    {
        title: "Profile",
        link: "/profile",
        component: ProfilePage
    }
];

export default routes_list;