import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AttachMoney from "@material-ui/icons/AttachMoney";
import LocalAtm from "@material-ui/icons/LocalAtm";
import Payment from "@material-ui/icons/Payment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

import profile from "assets/img/beCourseIcon.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Redirect, useParams } from "react-router";

const useStyles = makeStyles(styles);

export default function ShowProposalPage(props) {
    const classes = useStyles();
    const { code } = useParams();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        code === "beCourse_2021_proposal" ? <div>
            <Parallax small filter image={require("assets/img/bg_proposal_show.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Proposta Para Front-End</h3>
                                        <h5>Empresa: BeCourse</h5>
                                        <h6>Data: 17/04/2021</h6>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                O projeto se resume no desenvolvimento do 'front-end' do site e do sistema do BeCourse (www.becourse.com.br), contemplando área administrativa, área do aluno e as demais que tiverem necessidade de correção até a data de início deste projeto definida.{" "}
                            </p>
                            <p>
                                O valor total definido abaixo pode ser negociado e tem prazo de até 30 dias após a data de emissão desta proposta. O valor pode ser modificado/alterado de acordo com essa 'validade'.
                        </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="info"
                                    tabs={[
                                        {
                                            tabButton: "Investimento",
                                            tabIcon: LocalAtm,
                                            tabContent: (
                                                <div>

                                                    <p>
                                                        Será necessário um investimento de aproximadamente $149,90 (dólares) em templates/layouts para melhor suporte do visual do site.
                                                    </p>
                                                    <List

                                                        component="nav"
                                                        aria-labelledby="nested-list-subheader"
                                                        subheader={
                                                            <ListSubheader component="div" id="nested-list-subheader">
                                                                Templates/Layouts Indicados
                                                            </ListSubheader>
                                                        }>
                                                        <ListItem>
                                                            <ListItemText primary="Soft UI Design" secondary={<a href="https://demos.creative-tim.com/soft-ui-design-system-pro/presentation.html#pricing-soft-ui" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar</a>} />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemText primary="BLK Design System" secondary={<a href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=blkdspr-presentation-header&_ga=2.260118413.1053001449.1618951261-1084458785.1617240239" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar</a>} />
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            )
                                        },
                                        {
                                            tabButton: "Valor",
                                            tabIcon: AttachMoney,
                                            tabContent: (
                                                <GridContainer justify="center" style={{ overflow: 'hidden' }}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Desenvolvimento do site e design" secondary="R$2200,00" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Melhorias após entrega final" secondary="R$350,00 / por melhoria" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Até 3 alterações após a entrega final" secondary="R$0,00" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <AttachMoney />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Total" secondary="R$2200,00" />
                                                        </ListItem>
                                                    </List>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Entregas",
                                            tabIcon: WorkIcon,
                                            tabContent: (
                                                <GridContainer justify="center" style={{ overflow: 'hidden' }}>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Landing Page" secondary="7 dias corridos" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Perfil de Administrador" secondary="8 dias úteis" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Perfil de Professor" secondary="8 dias úteis" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <WorkIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Perfil de Aluno" secondary="8 dias úteis" />
                                                        </ListItem>
                                                    </List>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Pagamento",
                                            tabIcon: Payment,
                                            tabContent: (
                                                <div>
                                                    <p>
                                                        Pagamento é feito em transferência bancária, PIX, ou boleto.
                                                </p>
                                                    <p>
                                                        Podendo ser dividido em até 4 vezes, o valor total.
                                                </p>
                                                </div>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.profile + " mb-4 pb-4"}>
                                <div className={classes.name}>
                                    <h3 className={classes.title}>Dúvidas?</h3>
                                    <h6>Entre em contato por uma das plataformas abaixo</h6>
                                    <a href="https://rafaelgcs.com/#/contato" target="_blank" rel="noopener noreferrer">
                                        rafaelgcs.com
                                    </a>

                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>

        </div> : <Redirect to="/" />
    );
}
