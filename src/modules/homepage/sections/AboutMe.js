import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="#0d0e14" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,80C840,75,960,53,1080,37.3C1200,21,1320,11,1380,5.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <div className={classes.section} >
                <div className={classes.container}>
                    <GridContainer justify="left">
                        <GridItem xs={12} sm={12} md={6} className="d-none d-md-block">
                            <img src={require('assets/img/tiago-blue-270x480.png')} alt="Logomarca" />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{ position: 'center', alignContent: 'center' }}>
                                <h2 style={{ textTransform: 'uppercase' }} className="mb-4 font-weight-bold">Quem Sou?</h2>
                                <h4>
                                    Sou <strong>Tiago Carvalho</strong>, profissional de Educação Física, formado desde 2012 pela UCSAL. Atuo na área desde 2006, sou apaixonado por esportes, vida, saúde e movimento. Sou questionador por essência, um eterno buscador de mim mesmo.
                                </h4>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
                <path fill="#0d0e14" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,80C840,75,960,53,1080,37.3C1200,21,1320,11,1380,5.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    );
}
