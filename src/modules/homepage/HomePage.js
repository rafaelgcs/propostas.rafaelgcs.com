import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "./sections/Footer"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./sections/ProductSection.js";
import AboutMe from "./sections/AboutMe.js";
import Testimonials from "./sections/Testimonials";
import MFITSection from "./sections/MFITSection";
import Plans from "./sections/PlansSection";
import FloatWhatsappButton from "./components/FloatButton/FloatWhatsappButton";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{backgroundColor: '#0d0e14', scrollBehavior: 'smooth'}}>
      <Header
        color="transparent"
        // routes={dashboardRoutes}
        // brand="Material Kit React"
        // rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg5.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer justify="center">
                <GridItem xs={6} sm={3} md={3}>
                  <img src={require("assets/img/tiago_carvalho.png")} style={{ maxWidth: '100%' }} alt="Logo Tiago Carvalho" />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Consultoria Fitness.</h1>
              <h5>
                Desenvolvi técnicas de alta performance que transformaram minha forma de trabalho e consequentemente minha vida. 
              </h5>
              <h5><strong>Que tal deixar eu te ajudar a repensar tua jornada?</strong></h5>
              <br />
              <Button
                color="info"
                size="lg"
                href="#plans"
                rel="noopener noreferrer"
              >
                <span style={{ marginRight: 30 }}>Quero fazer parte</span>
                <i className="fas fa-play ml-2" />
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Testimonials />
      <MFITSection />
      <AboutMe />
      <Plans />
      <Footer />
      <FloatWhatsappButton />
    </div>
  );
}
