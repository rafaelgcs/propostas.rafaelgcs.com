//Logos
import logoNav from "../assets/img/logo-ct.png";
import logoCoinbase from "../assets/img/logos/gray-logos/logo-coinbase.svg";
import logoNasa from "../assets/img/logos/gray-logos/logo-nasa.svg";
import logoNetflix from "../assets/img/logos/gray-logos/logo-netflix.svg";
import logoPinterest from "../assets/img/logos/gray-logos/logo-pinterest.svg";
import logoSpotify from "../assets/img/logos/gray-logos/logo-spotify.svg";
import logoVadafone from "../assets/img/logos/gray-logos/logo-vodafone.svg";

//Small Logos
import smallLogoXd from "../assets/img/small-logos/logo-xd.svg";
import smallLogoAtlassian from "../assets/img/small-logos/logo-atlassian.svg";
import smallLogoSpotify from "../assets/img/small-logos/logo-spotify.svg";
import smallLogoSlack from "../assets/img/small-logos/logo-slack.svg";
import smallLogoJira from "../assets/img/small-logos/logo-jira.svg";
import smallLogoInvision from "../assets/img/small-logos/logo-invision.svg";

//Curved
import whiteCurved from "../assets/img/curved-images/white-curved.jpeg";
import curved0 from "../assets/img/curved-images/curved0.jpg";
import curved6 from "../assets/img/curved-images/curved6.jpg";

//Shapes
import waveWhite from "../assets/img/shapes/waves-white.svg";
import wavesManyWhite from "../assets/img/shapes/waves-many-white.svg";

// Illustrations
import rocketWhite from "../assets/img/illustrations/rocket-white.png";
import signUp from "../assets/img/illustrations/sign-up.png";

// People
import ivancik from "../assets/img/ivancik.jpg";
import bruceMars from "../assets/img/bruce-mars.jpg";
import kalVisuals from "../assets/img/kal-visuals-square.jpg";
import marie from "../assets/img/marie.jpg";
import ivana from "../assets/img/ivana-square.jpg";

// default
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";
import homeDecor1 from "../assets/img/home-decor-1.jpg";
import homeDecor2 from "../assets/img/home-decor-2.jpg";
import homeDecor3 from "../assets/img/home-decor-3.jpg";
import downArrowDefault from "../assets/img/down-arrow.svg";
import downArrowWhite from "../assets/img/down-arrow-white.svg";
import downArrowDark from "../assets/img/down-arrow-dark.svg";
import officeDark from '../assets/img/office-dark.jpg';
import meeting1 from '../assets/img/meeting.jpg';
import meeting2 from '../assets/img/meeting_2.jpg';

const logos = {
    navbar: logoNav,
    gray: {
        coinbase: logoCoinbase,
        nasa: logoNasa,
        netflix: logoNetflix,
        pinterest: logoPinterest,
        spotify: logoSpotify,
        vadafone: logoVadafone,
    },

}

const smallLogos = {
    xd: smallLogoXd,
    atlassian: smallLogoAtlassian,
    spotify: smallLogoSpotify,
    slack: smallLogoSlack,
    jira: smallLogoJira,
    invision: smallLogoInvision,
}

const curved = {
    white: whiteCurved,
    curved_0: curved0,
    curved_6: curved6,
}

const illustrations = {
    rocket: {
        white: rocketWhite
    },
    signUp,
}

const shapes = {
    waves: {
        white: waveWhite,
        manyWhite: wavesManyWhite,
    },
}

const people = {
    ivancik,
    bruceMars,
    kalVisuals,
    marie,
    ivana,
}

const defaultImages = {
    team1,
    team2,
    team3,
    team4,
    homeDecor1,
    homeDecor2,
    homeDecor3,
    arrow: {
        down: {
            white: downArrowWhite,
            dark: downArrowDark,
            default: downArrowDefault,
        },
    },
    office: {
        dark: officeDark
    },
    meeting1,
    meeting2
}

export { logos, curved, illustrations, shapes, smallLogos, people, defaultImages };