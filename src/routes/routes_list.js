import AdminHomePage from "../modules/admin/pages/admin_home_page";
import AdminProposalsPage from "../modules/admin/pages/admin_proposals_page";
import BillingPage from "../modules/admin/pages/billing_page";
import DashboardPage from "../modules/admin/pages/dashboard_page";
import LoginPage from "../modules/admin/pages/login_page";
import ProfilePage from "../modules/admin/pages/profile_page";
import HomePage from "../modules/website/pages/home_page";
import ProposalPage from "../modules/website/pages/proposal_page";

const routes_list = [
    // SITE
    {
        title: "Home Page",
        module: "website",
        link: "/",
        component: HomePage,
        protected: false,
    },
    {
        title: "Proposal",
        module: "website",
        link: "/proposal",
        component: ProposalPage,
        protected: false,
    },
    {
        title: "Proposal",
        module: "website",
        link: "/proposal/:id",
        component: ProposalPage,
        protected: false,
    },
    // ADMIN
    {
        title: "Login",
        module: "admin",
        link: "/admin/login",
        component: LoginPage,
        protected: false,
    },
    {
        title: "Página inicial",
        module: "admin",
        link: "/admin/",
        component: AdminHomePage,
        protected: true,
    },
    {
        title: "Propostas",
        module: "admin",
        link: "/admin/proposals",
        component: AdminProposalsPage,
        protected: true,
    },
    // {
    //     title: "Dashboard",
    //     link: "/dashboard",
    //     component: DashboardPage
    // },
    // {
    //     title: "Billing",
    //     link: "/billing",
    //     component: BillingPage
    // },
    // {
    //     title: "Profile",
    //     link: "/profile",
    //     component: ProfilePage
    // },

];

export default routes_list;