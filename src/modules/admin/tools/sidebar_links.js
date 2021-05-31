import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';


const iconsUnselectedColor = "#3A416F";

const sidebar_links = [
    {
        title: "Início",
        link: "/admin",
        IconSelected: <i className={`fas fa-home text-lg opacity-10`} style={{ marginTop: -4 }} aria-hidden="true"></i>,
        Icon: <i className={`fas fa-home text-lg opacity-10`} style={{ marginTop: -4, color: iconsUnselectedColor }} aria-hidden="true"></i>
    },
    {
        title: "Propostas",
        link: "/admin/proposals",
        IconSelected: <i className={`fas fa-people-arrows text-lg opacity-10`} style={{ marginTop: -4 }} aria-hidden="true"></i>,
        Icon: <i className={`fas fa-people-arrows text-lg opacity-10`} style={{ marginTop: -4, color: iconsUnselectedColor }} aria-hidden="true"></i>
    },

];

export { sidebar_links }